import { MainItemContainer } from "./main-item.styles";

import { ReactSVG }          from 'react-svg';
import {createImageUrl}      from "../../utils/createImageUrl.util";

const MainItem = ({ item }) => {
  const { icon,title,link } = item;
  return (
    <MainItemContainer
      to={link}
      className={`${title === 'Leave' ? 'accent-bg' : ''} `}>
      <div className={`wrapper-icon ${icon === 'plus-icon' ? 'center' : ''} `}>
        {/*<img src={`./widgets-icon/${icon}.svg`} alt='#' />*/}
        {/*  <IconSvg2 name={icon} fill={"#dc0000"} stroke={"#00DC00"}/>*/}
          <ReactSVG src={createImageUrl(icon)} />
      </div>
      <div>{title}</div>
    </MainItemContainer>
  )
};

export default MainItem;
