import { useDispatch,useSelector } from "react-redux";


import { getTransfersItems,getShowModal } from "../../store/transfers/transfers.selector";
import { setShowModalTransfer } from "../../store/transfers/transfers.action";

import ModalTransfers from "../../components/modal-transfers/modal-transfers";
import TransferItem from "../../components/transfer-item/transfer-item";

import { TransfersContainer } from "./transfers.styles";
import { useState } from "react";

let timer = null;

const Transfers = () => {
  const dispatch = useDispatch();
  const [elevatorName,setElevatorName] = useState('');
  const transfersItems = useSelector(getTransfersItems);
  const showModal = useSelector(getShowModal);
  const handlerModal = (item) => {
    clearTimeout(timer);
    setElevatorName(item.elevatorName);
    dispatch(setShowModalTransfer(true));
    timer = setTimeout(() => {
      dispatch(setShowModalTransfer(false));
    },5000)

    //call nav & call setTimeOut & modal props name elevator.
  }
  return (
    <TransfersContainer>
      {
        showModal ? <ModalTransfers name={elevatorName} /> : ''
      }

      {
        transfersItems.map(item => (<TransferItem item={item} handler={handlerModal} key={item.id} />))
      }
    </TransfersContainer>
  );
};

export default Transfers;