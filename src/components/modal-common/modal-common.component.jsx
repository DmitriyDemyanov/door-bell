import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { getModalCommonInfo } from '../../store/widgets/widgets.selector';
import { setModalCommonInfo } from '../../store/widgets/widgets.actions';

import { ReactSVG }          from 'react-svg';
import {createImageUrl}      from "../../utils/createImageUrl.util";

import { ReactComponent as ModalDefaultIcon } from '../../assets/default-icon/modal-default-icon.svg'
import { ModalCommonContainer,WrapperRenderModal } from "./modal-common.styles";


const ModalCommon = () => {
  const dispatch = useDispatch();
  const [statusModalCommon,setStatusModalCommon] = useState(false);

  const modalItem = useSelector(getModalCommonInfo);

  useEffect(() => {

    if (modalItem !== null) {
      setStatusModalCommon(true);

      setTimeout(() => {

        setTimeout(() => {
          dispatch(setModalCommonInfo(null));
        },200);

        setStatusModalCommon(false);

      },3000)
    }

  },[modalItem])

  return (
    <WrapperRenderModal
      className={statusModalCommon ? '' : 'hide'}
      onClick={() => setStatusModalCommon(false)}
    >
      <ModalCommonContainer
      >
        <div className="wrapper-icon">  {
          modalItem ? <ReactSVG fill={"#dc0000"} src={createImageUrl(modalItem.icon)} /> : <ModalDefaultIcon />
        }
        </div>
        <div className="wrapper-title"> System widget added to {modalItem?.title} </div>
      </ModalCommonContainer>
    </WrapperRenderModal>

  )
};

export default ModalCommon;
