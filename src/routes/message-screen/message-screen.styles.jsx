import styled from "styled-components";

export const MessageScreenContainer = styled.div`
  .remove-message {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 48px;
    height: 104px;
    background: linear-gradient(to bottom, rgb(150,2,2), rgb(110,4,4));
    border-radius: 3px;
    font-size: 28px;
    font-weight: 700;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 0 12px;

    &:before {
      content: "";
      position: absolute;
      width: calc(100% + 4px);
      left: -2px;
      top: -2px;
      height: calc(100% + 2px);
      background: radial-gradient(ellipse at top, rgba(255, 255, 255, 0.4) 20%, transparent 90%);
      z-index: -1;
    }
  }
`