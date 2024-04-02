import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { getWidgetsList } from '../../store/widgets/widgets.selector';
import { getModalCommonInfo } from '../../store/widgets/widgets.selector';
import { setModalCommonInfo } from '../../store/widgets/widgets.actions';

import SvgIcon from "../icon-svg/svg-icon.component";

import { ModalCommonContainer,WrapperRenderModal } from "./modal-common.styles";


const ModalCommon = () => {
  const dispatch = useDispatch();
  const [statusModalCommon,setStatusModalCommon] = useState(false);

  const modalItem = useSelector(getModalCommonInfo);
  const renderWidgets = useSelector(getWidgetsList);
  console.log('renderWidgets',renderWidgets);
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
        <div>
          <div className="wrapper-icon">  {
            modalItem && renderWidgets.length < 14 ? <SvgIcon name={modalItem.icon} /> : <SvgIcon name='modal-default-icon' />
          }
          </div>
        </div>
        <div className="wrapper-title"> <span> {modalItem?.title}  </span>  widget added to home Screen  </div>
      </ModalCommonContainer>
    </WrapperRenderModal>

  )
};

export default ModalCommon;
