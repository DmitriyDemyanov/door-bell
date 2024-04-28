import styled from "styled-components";

export const ModalTransfersContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index:1;
`
export const ModalTransfersWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88%;
  height: 44.5%;
  border-radius: 3px;
  background-color:var(--background-modal-opposite);
  z-index: 2;
  color: var(--color-main-font);
  text-align: center;
  .content-transfer{
    padding: 40px 70px 0;
    height: 73%;

    .title-transfer{
      font-size: 36px;
      font-weight: 700;
      line-height: 44px;
    }
    .subtitle-transfer{
      margin: 24px 0;
      font-size: 26px;
      font-weight: 300;
      line-height: 32px;
    }
    .description-transfer {
      font-size: 100px;
      font-weight: 700;
      line-height: 130px;
      color: #DC0000;
      text-transform: uppercase;
    }
  
  }

  .btn-transfer {
    width: 100%;
    height: 26.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
    font-weight: 700;
    line-height: 40px;
    border-top: 1px solid #FFFFFF1A;
  }

`