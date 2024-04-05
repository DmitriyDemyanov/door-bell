
import { useSelector } from 'react-redux';

import { getShowLoader } from "../../store/loader/loader.selector";


import { GlobalLoaderContainer,LoaderIconContainer } from "./global-loader.styles";

const GlobalLoader = () => {
  const setShowLoader = useSelector(getShowLoader);
  return (

    <div className={setShowLoader? '' : 'hide'}>
      <LoaderIconContainer></LoaderIconContainer>
      <GlobalLoaderContainer ></GlobalLoaderContainer>
    </div>

  );
};

export default GlobalLoader;