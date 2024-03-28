import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';

import { setWidgetsMain,setWidgetsFooter,setAllServiceItems,setAllSettingsItems } from '../../store/widgets/widgets.actions';

import { getRenderWidgets } from '../../store/widgets/widgets.selector';
import { getWidgetsMain } from '../../store/widgets/widgets.selector';

import Footer from "../../components/footer/footer.component";
import MainItem from "../../components/main-item/main-item.component";

import { MainScreenContainer } from "./main-screen.styles";


const widgetsDefault = [
  {
    icon: 'cameras-icon',
    title: 'cameras',
    link: '/add-widget',
    id: 1
  },
  {
    icon: 'services-icon',
    title: 'services',
    link: '/',
    id: 2
  },
  {
    icon: 'message-icon',
    title: 'message',
    link: '/',
    id: 3
  },
  {
    icon: 'plus-icon',
    title: '',
    link: 'add-widget',
    id: 4
  }
];

const settingsFooterItem = [
  {
    icon: 'in-call-icon',
    title: 'View Calls'

  },
  {
    icon: 'leave-icon',
    title: 'Leave'
  },
  {
    icon: 'lock-icon',
    title: 'Unlock Door'
  },

]
const WidgetsSettings = [
  {
    icon: 'weather-icon',
    title: 'Overcast Clouds',
    link: 'weather',
    id: 5
  },

  {
    icon: 'sleep-icon',
    title: 'sleep mode',
    link: 'sleep-mode',
    id: 7
  },
  {
    icon: 'audio-icon',
    title: 'audio',
    link: 'audio',
    id: 8
  },
  {
    icon: 'user-icon',
    title: 'user',
    link: 'user',
    id: 9
  },

  {
    icon: 'info-icon',
    title: 'information',
    link: 'information',
    id: 11
  },

  {
    icon: 'system-icon',
    title: 'system',
    link: 'system',
    id: 13
  },
  {
    icon: 'language-icon',
    title: 'language',
    link: 'language',
    id: 14
  },
]
const widgetsService = [
  {
    icon: 'cleaning-icon',
    title: 'cleaning mode',
    link: 'cleaning-mode',
    id: 10
  },
  {
    icon: 'doors-icon',
    title: 'doors',
    link: 'doors',
    id: 12
  },
  {
    icon: 'transfers-icon',
    title: 'transfers',
    link: 'transfers',
    id: 6
  },
]

const MainScreen = () => {
  const dispatch = useDispatch();
  const widgetsRender = useSelector(getRenderWidgets);

  useEffect(() => {
    dispatch(setWidgetsFooter(settingsFooterItem));
    dispatch(setWidgetsMain(widgetsDefault));
    dispatch(setAllServiceItems(widgetsService));
    dispatch(setAllSettingsItems(WidgetsSettings));
  },[]);

  const [currentPage,setCurrentPage] = useState(1);
  const totalItemsOnPage = 9;
  const AllPages = Math.ceil(widgetsRender.length / totalItemsOnPage);
  const pagination = widgetsRender.slice((currentPage - 1) * totalItemsOnPage,((currentPage - 1) * totalItemsOnPage) + totalItemsOnPage);

  return (
    <MainScreenContainer>

      <div className="wrapper-default-settings" >
        {
          pagination.map((setting,ind) => (<MainItem item={setting} key={ind} />))
        }
      </div>
      <div style={{ fontSize: '40px',textAlign: 'center' }} >
        <span onClick={() => setCurrentPage(currentPage - 1)} > - </span>
        <span>{AllPages}</span>
        <span onClick={() => setCurrentPage(currentPage + 1)} > + </span>
      </div>
      <Footer />
    </MainScreenContainer >
  )
};

export default MainScreen;