import { useSelector } from 'react-redux';
import { useState } from 'react';


import { getWidgetsList } from '../../store/widgets/widgets.selector';

import Footer from "../../components/footer/footer.component";
import MainItem from "../../components/main-item/main-item.component";

import { MainScreenContainer } from "./main-screen.styles";


const MainScreen = () => {

  const widgetsRender = useSelector(getWidgetsList);

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
