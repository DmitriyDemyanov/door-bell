import { useNavigate } from "react-router-dom";
import { ReactComponent as SettingsIcon } from '../../assets/icons-header/settings-icon.svg';

import { HeaderMainContainer } from "./header-main.styles";

const HeaderMain = () => {
  const nav = useNavigate();
  return (
    <HeaderMainContainer>
      <div className='header-date' > 09:45 May 26, 2023 </div>
      <div className='wrapper-settings' onClick={() => nav('/main-settings')} ><SettingsIcon /></div>
    </HeaderMainContainer>
  )
};
export default HeaderMain;