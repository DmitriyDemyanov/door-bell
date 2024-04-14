import styled from "styled-components";

export const MessageItemContainer = styled.div`
  width:100%;
  height: 92px;
  margin-bottom: 16px;
  padding-left: 32px;
  padding-right: 5px;
  display: flex;
  align-items:center;
  font-size: 28px;
  font-weight: 700;
  position: relative;
  border-radius: 3px;
  background: var(--background-menu-item);
  box-shadow: 0 -10px 30px -20px rgba(0,0,0,0.4);
  .wrapper-bg{
    position: absolute;
    width: calc(100% + 2px);
    height: 90px;
    bottom: 3px;
    left: -1px;
    right: 0;
    background:var(--background-border);
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
