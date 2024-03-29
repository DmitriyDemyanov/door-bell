import { ReactComponent as ModalDefaultIcon } from '../../assets/default-icon/modal-default-icon.svg'

import { ModalCommonContainer } from "./modal-common.styles";

const ModalCommon = () => {
  return (
    <ModalCommonContainer className='hid' >
      <div className="wrapper-icon"> <ModalDefaultIcon /></div>
      <div className="wrapper-title">  System widget added to home Screen  </div>
    </ModalCommonContainer>
  )
};

export default ModalCommon;