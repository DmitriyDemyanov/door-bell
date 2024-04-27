import SvgIcon from "../icon-svg/svg-icon.component";

import { TransferItemContainer } from "./transfer-item.styles";

const TransferItem = () => {
  return (
    <TransferItemContainer>
      <div className="wrapper-transfer-content">
        <div style={{ display: 'flex' }} ><div className="transfer-content">From:</div> 0 Main Entrance </div>
        <div style={{ display: 'flex' }} ><div className="transfer-content">To:</div> 595 Wohnung 5.10 </div>
      </div>
      <div className="wrapper-transfer-icon">
        <SvgIcon name={'transfer-item-icon'} />
      </div>
    </TransferItemContainer>
  );
};

export default TransferItem;
