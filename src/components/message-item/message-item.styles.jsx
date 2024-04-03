import styled from "styled-components";

export const MessageItemContainer = styled.div`
  width:100%;
  height: 92px;
  margin-top: 16px;
  padding-left: 32px;
  padding-right: 5px;
  display: flex;
  align-items:center;
  font-size: 28px;
  font-weight: 700;
  position: relative;
  border-radius: 3px;
  background: linear-gradient(180deg, #333333, #202020);
  .wrapper-bg{
    position: absolute;
    width: calc(100% + 2px);
    height: 90px;
    bottom: 3px;
    left: -1px;
    right: 0;
    background:radial-gradient(ellipse at top, rgba(255, 255, 255, 0.4) 20%, transparent 90%);
    border-radius: 3px;
    z-index: -1; 
  }
  .message-title {
    margin-left: 32px;
  }
  .message-active-icon {
    margin-left: auto;
  }
`