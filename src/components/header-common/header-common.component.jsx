import { useLocation,useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowLeftIcon } from '../../assets/icons-header/arrow-left-icon.svg';
import { HeaderCommonContainer } from "./header-common.styles";


const settingTitle = {
  '/add-widget': 'Add to Main Screen',
  '/add-widget/service': 'Add Service',
  '/add-widget/settings': 'Add Settings',
  '/cleaning-mode': 'Please clean the Screen now',
  '/message': 'Message',
}

const HeaderCommon = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  console.log('pathname',pathname);
  return (
    <HeaderCommonContainer>
      <div className={pathname === '/cleaning-mode' ? 'hide' : ''} onClick={() => nav(-1)} > <ArrowLeftIcon /> </div>
      <div className="header-title">{settingTitle[pathname]} </div>
    </HeaderCommonContainer>
  )
};

export default HeaderCommon;

///add-widget/service