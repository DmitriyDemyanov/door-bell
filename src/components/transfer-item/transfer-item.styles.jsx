import styled from "styled-components";

export const TransferItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 146px;
  margin-bottom: 12px;
  background: var(--background-menu-item);
  padding: 32px;
   box-shadow: 0 -10px 30px -20px rgba(0,0,0,0.4);
  &::after{
    content: '';
    position: absolute;
    width: calc(100% + 3px);
    height: 146px;
    bottom: 1px;
    left: -1px;
    right: 0;
    background: var(--background-border);
    border-radius: 3px;
    z-index: -1;
  }
  .wrapper-transfer-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 79%;
    border-right: 1px solid #979797;
    color: var(--color-main-font);
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    .transfer-content{
      width: 20%;
      font-family:'Times New Roman', Times, serif;
      font-size: 24px;
      font-weight: 300;
      line-height: 28px;
    } 
  }

`