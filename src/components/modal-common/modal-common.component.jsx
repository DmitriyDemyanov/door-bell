import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import {modalTitle, modalIsShow} from '../../store/modal/modal.selector';
import { setIsShow } from '../../store/modal/modal.action';

import SvgIcon from "../icon-svg/svg-icon.component";

import { ModalCommonContainer,WrapperRenderModal } from "./modal-common.styles";

let timer = null;

const ModalCommon = () => {
  const dispatch = useDispatch();
  const title = useSelector(modalTitle);
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
      <ModalCommonContainer
      >
        <SvgIcon className="wrapper-icon" name={"modal-default-icon"}/>
        <div className="wrapper-title"> System widget added to {title} </div>
      </ModalCommonContainer>
    </WrapperRenderModal>

  )
};

export default ModalCommon;
