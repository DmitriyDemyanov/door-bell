import SvgIcon from '../../components/icon-svg/svg-icon.component';

import { UserManualContainer } from "./user-manual.styles";

const UserManual = () => {
  return (
    <UserManualContainer>
      <div className="user-manual-description">Obtain detailed instructions for the PORT 4 Home device by scanning the provided QR Code.</div>

      <div className="qr-Code-wrapper">
        <SvgIcon name='qr-code-icon' />
      </div>
    </UserManualContainer>
  );
};

export default UserManual;