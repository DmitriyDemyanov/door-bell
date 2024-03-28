import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowLeftIcon } from '../../assets/icons-header/arrow-left-icon.svg';
import { HeaderCommonContainer } from "./header-common.styles";


const HeaderCommon = () => {
  const nav = useNavigate();
  return (
    <HeaderCommonContainer>
      <div onClick={() => nav(-1)} > <ArrowLeftIcon /> </div>
      <div className="header-title">Add to Main Screen</div>
    </HeaderCommonContainer>
  )
};

export default HeaderCommon;