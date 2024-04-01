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
  

  &::before {
    content: '';
    position:absolute;
    width: 168px;
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
    padding: 36px 0 28px 0;
    img{
      width: 48px;
      height: 48px;
    }
  }
  .center{
    height: 100%;
    padding: 0;
  }
  
  .icon-cameras {
    background-image: url('/widgets-icon/cameras-icon.svg');
  }
`
