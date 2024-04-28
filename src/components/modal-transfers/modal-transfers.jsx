
import { Fragment } from "react";

import { setShowModalTransfer } from "../../store/transfers/transfers.action";

import { ModalTransfersContainer,ModalTransfersWindow } from "./modal-transfers.styles";
import { useDispatch } from "react-redux";

const ModalTransfers = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <ModalTransfersContainer>
      </ModalTransfersContainer>
      <ModalTransfersWindow >
        <div className="content-transfer">
          <div className="title-transfer">The Transfer Has Been Started</div>
          <div className="subtitle-transfer">The visitor will take elevator</div>
          <div className="description-transfer">{name}</div>
        </div>
        <div className="btn-transfer" onClick={() => dispatch(setShowModalTransfer(false))} >ok</div>
      </ModalTransfersWindow>
    </Fragment>
  );
};

export default ModalTransfers;