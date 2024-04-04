import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { modalSettings,modalIsShow } from '../../store/modal/modal.selector';
import { setIsShow } from '../../store/modal/modal.action';

import SvgIcon from "../icon-svg/svg-icon.component";

import { ModalCommonContainer,WrapperRenderModal } from "./modal-common.styles";

let timer = null;

const renderTypeIcon = {
  door: 'door-icon',
  message: 'message-item-icon',
  attention: 'attention-icon',
  info: 'modal-default-icon'
};

const ModalCommon = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(modalSettings);
  const isShow = useSelector(modalIsShow);

  useEffect(() => {

    clearTimeout(timer);
    if (isShow) {
      timer = setTimeout(() => {
        dispatch(setIsShow(false));
      },3000);
    }
  },[isShow]);

  return (
    <WrapperRenderModal
      className={isShow ? '' : 'hide'}
      onClick={() => dispatch(setIsShow(false))}
    >
      <ModalCommonContainer>
        <SvgIcon className="wrapper-icon" name={renderTypeIcon[modalData?.type]} />
        <div className="wrapper-title"> {modalData?.title} </div>
      </ModalCommonContainer>
    </WrapperRenderModal>

  )
};

export default ModalCommon;
