import styled from "styled-components";

export const MessageScreenContainer = styled.div`
  .remove-message{
    position: absolute;
    bottom: 48px;
    width: 84%;
    height: 104px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background: linear-gradient(180deg, #960202, #6e0404);
    font-size: 28px;
    font-weight: 700;
    z-index: 100 !important;
    .back-bg {
      position: absolute;
      width: calc(100% + 2px);
      height: 102px;
      bottom: 3px;
      left: -1px;
      right: 0;
      background:radial-gradient(ellipse at top, rgba(255, 255, 255, 0.4) 20%, transparent 90%);
      border-radius: 3px;
      z-index: -100 !important;
    }
  }
   
`