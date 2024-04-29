import SvgIcon from "../icon-svg/svg-icon.component";

import { TransferItemContainer } from "./transfer-item.styles";

const TransferItem = ({ item,handler }) => {

  return (
    <TransferItemContainer>
      <div className="wrapper-transfer-content" onClick={() => handler(item)}>
        <div style={{ display: 'flex' }} ><div className="transfer-content">From:</div>{item.from} </div>
        <div style={{ display: 'flex' }} ><div className="transfer-content">To:</div> {item.to} </div>
      </div>
      <div className="wrapper-transfer-icon">
        <SvgIcon name={'transfer-item-icon'} />
      </div>
    </TransferItemContainer>
  );
};

export default TransferItem;
