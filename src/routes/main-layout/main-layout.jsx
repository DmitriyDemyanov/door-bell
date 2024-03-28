import { Fragment } from "react";
import { Outlet,useLocation } from "react-router-dom";

import HeaderMain from "../../components/header-main/header-main.component";
import HeaderCommon from "../../components/header-common/header-common.component";

const MainLayout = () => {

  const { pathname } = useLocation();

  return (
    <Fragment>
      
      { pathname === '/' ? <HeaderMain /> : <HeaderCommon /> }

      <Outlet />
    </Fragment>
  );
};

export default MainLayout;