import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';

import { loadFromLS,saveToLS } from '../../utils/localStorage.util';
import { fetchCurrentWeatherAsync,fetchWeatherCurrentSuccess } from '../../store/weather/weather.action';

import { setTimeFetchWeather } from '../../store/weather/weather.action';
import { getTimeLastFetchWeather } from '../../store/weather/weather.selector';
import { getCurrentWeather } from '../../store/weather/weather.selector';

import { getWidgetsList } from '../../store/widgets/widgets.selector';

import Footer from "../../components/footer/footer.component";
import MainItem from "../../components/main-item/main-item.component";

import { MainScreenContainer } from "./main-screen.styles";


const MainScreen = () => {
  const widgetsList = useSelector(getWidgetsList);
  const [currentPage,setCurrentPage] = useState(1);
  const totalItemsOnPage = 9;
  const AllPages = Math.ceil(widgetsList.length / totalItemsOnPage);
  const pagination = widgetsList.slice((currentPage - 1) * totalItemsOnPage,((currentPage - 1) * totalItemsOnPage) + totalItemsOnPage);
  const dispatch = useDispatch();
  const timeLastFetchWeather = useSelector(getTimeLastFetchWeather);
  const currentWeather = useSelector(getCurrentWeather);

  useEffect(() => {
    if (Date.now() - timeLastFetchWeather > 180000 || !Object.keys(currentWeather).length) {
      dispatch(fetchCurrentWeatherAsync());
      dispatch(setTimeFetchWeather(Date.now()));
      saveToLS('timeLastFetchWeather',Date.now());
    }
    else {
      dispatch(fetchWeatherCurrentSuccess(loadFromLS('current-weather')));
    }

  },[]);


  return (
    <MainScreenContainer>
      <div className="wrapper-default-settings" >
        {
          pagination.map((setting,ind) => (<MainItem item={setting} key={ind} />))
        }
      </div>
      <div style={{ fontSize: '40px',textAlign: 'center',marginTop: '70px' }} >
        <span onClick={() => setCurrentPage(currentPage - 1)} > - </span>
        <span>{AllPages}</span>
        <span onClick={() => setCurrentPage(currentPage + 1)} > + </span>
      </div>
      <Footer />
    </MainScreenContainer >
  )
};

export default MainScreen;
