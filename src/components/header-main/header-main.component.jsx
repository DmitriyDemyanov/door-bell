import { useEffect,useState } from 'react';
import { ReactComponent as SettingsIcon } from '../../assets/icons-header/settings-icon.svg';

import { HeaderMainContainer } from "./header-main.styles";


console.log(new Date(Date.now()).toLocaleString('en',{ month: 'short',day: '2-digit',year: 'numeric' }));

const HeaderMain = () => {
  const [dateMain,setDate] = useState(new Date(Date.now()).toLocaleString('en',{ month: 'short',day: '2-digit',year: 'numeric' }));

  const [timeMain,setTime] = useState(`${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}`);


  useEffect(() => {
    setInterval(() => {
      setTime(`${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}`);
      console.log('!!!!!')
    },50000);
  },[timeMain,])




  return (
    <HeaderMainContainer>
      <div className='header-date'>{timeMain}  {dateMain} </div>
      <div className='wrapper-settings' onClick={() => console.log('/settings')} ><SettingsIcon /></div>
    </HeaderMainContainer>
  )
};
export default HeaderMain;