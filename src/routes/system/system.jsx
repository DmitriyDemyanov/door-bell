
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setShowLoader } from '../../store/loader/loader.action';
import { SystemContainer } from "./system.styles";
const System = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handlerClick = (str) => {
    if (str === 'reset') {
      return nav(-1);
    }
    dispatch(setShowLoader(true));
    setTimeout(() => {
      dispatch(setShowLoader(false));
      nav('/');
    },3000)
  }
  return (
    <SystemContainer>
      <div className="system-description-content">  To restore settings to their default values, select <span>Reset</span> . It will erase all custom configurations.
        <br />
        <br />
        To restart the device, select <span>Reboot</span>. This action will not change any settings.
      </div>
      <div className="wrapper-system-buttons">
        <div className="system-button" onClick={() => handlerClick('reset')}>reset</div>
        <div className="system-button accent-bg" onClick={() => handlerClick('reboot')}>reboot</div>
      </div>
    </SystemContainer>
  );
};

export default System;