import styled from 'styled-components';

export const UserManualContainer = styled.div`
  padding: 24px 32px 0;
  position: relative;
  .user-manual-description {
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 100;
    line-height: 38.4px;
  }
  .qr-Code-wrapper{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,50%);
  }
`