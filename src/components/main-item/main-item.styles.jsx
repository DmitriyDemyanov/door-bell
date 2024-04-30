import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainItemContainer = styled(Link)`
  position: relative;
  width: 168px;
  height: 168px;
  margin: 0 8px 16px 8px;
  top: 2px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 93.09%);
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 -10px 30px -20px rgba(0,0,0,0.4);

  &::before {
    content: '';
    position:absolute;
    width: 100%;
    height: 2px;
    left: 0;
    right: 0;
    background: radial-gradient(53.77% 82.08% at 50% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.0001) 100%);
    font-size: 28px;
    font-weight: 300;
    line-height: 36px;
    border-radius: 5px;
  }
  
  .wrapper-icon {
    padding: 36px 0 10px 0;
    position: relative;
    img{
      width: 48px;
      height: 48px;
    }
    .info-marker {
      position: absolute;
      top: 28px;
      right: 50px;
      width: 16px;
      height: 16px;
      background:rgba(220, 0, 0, 1);
      border-radius: 50%;
    }
  }
  .center{
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .icon-cameras {
    background-image: url('/widgets-icon/cameras-icon.svg');
  }
  .wrapper-main-title{
    height: 72px;
    display: flex;
    align-items: center;
   .main-item-title {
      width: 100%;
      font-size: 28px;
      font-weight: 300;
      line-height: 36px;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* количество строк */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: capitalize;
    }
    .weather-font-size {
      /* padding: 0 8px 20px 14px; */
      font-size: 20px;
      font-weight: 400;
      line-height: 24px; 
    }
  }
  .weather-temp{
    padding-left: 14px;
    font-size: 32px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
  }
  .weather-icon-setting {
    padding: 16px 16px 0 0;
    display: flex;
    justify-content: end; 
    svg {
      width: 44px;
      height: 44px;
    }
  }
 
`
