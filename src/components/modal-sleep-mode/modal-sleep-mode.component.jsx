
import { useDispatch,useSelector } from 'react-redux';

import { getShowSleepModal,getSleepModeTimer } from '../../store/sleep-mode/sleep-mode.selector';
import { setShowSleepModal } from '../../store/sleep-mode/sleep-mode.action';

import SvgIcon from '../icon-svg/svg-icon.component';
import { ModalSleepModeContainer,ModalSleepModeContent } from "./modal-sleep-mode.styles";

let timer = null;

const ModalSleepMode = () => {
  const dispatch = useDispatch();
  const showSleepModal = useSelector(getShowSleepModal);
  const sleepModeTimer = useSelector(getSleepModeTimer);

  if (showSleepModal) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(setShowSleepModal(false))
    },sleepModeTimer);
  };

  return (
    <div>
      {
        showSleepModal ?
          (<div onClick={() => dispatch(setShowSleepModal(false))}>
            <ModalSleepModeContainer></ModalSleepModeContainer>
            <ModalSleepModeContent>
              <div className="wrapper-sleep-mode-icon">
                <SvgIcon name='sleep-icon' />
              </div>
              <div className="description-sleep-mode">
                To turn off Sleep Mode from the terminal, tap the Screen 2 times
              </div>
            </ModalSleepModeContent>
          </div>) : ''
      }
    </div>
  );
};

export default ModalSleepMode;