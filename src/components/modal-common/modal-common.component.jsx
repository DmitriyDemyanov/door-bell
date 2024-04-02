import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { getModalCommonInfo } from '../../store/modal/modal.selector';
import { setModalCommonInfo } from '../../store/modal/modal.action';

import SvgIcon from "../icon-svg/svg-icon.component";

import { ReactComponent as ModalDefaultIcon } from '../../assets/default-icon/modal-default-icon.svg'
import { ModalCommonContainer,WrapperRenderModal } from "./modal-common.styles";


const ModalCommon = () => {
  const dispatch = useDispatch();
  const [statusModalCommon,setStatusModalCommon] = useState(false);

  const modalItem = useSelector(getModalCommonInfo);
  console.log('modalItem',modalItem)
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
          modalItem ? <SvgIcon name={modalItem.icon} /> : <ModalDefaultIcon />
        }
        </div>
        <div className="wrapper-title"> System widget added to {modalItem?.title} </div>
      </ModalCommonContainer>
    </WrapperRenderModal>

  )
};

export default ModalCommon;
