import styled from "styled-components";

export const ModalSleepModeContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.9;
  z-index:2;
`
export const ModalSleepModeContent = styled.div`
    position: absolute;
    width: 90%;
    top: 404px;
    left: 50%;
    transform: translateX(-50%);
    z-index:3;
    color: #fff;
    .wrapper-sleep-mode-icon {
      text-align: center;
    }
    svg {
      width: 72px;
      height: 72px;
      path {
        fill: #fff;
        stroke: #fff;
      }
    }
  .description-sleep-mode {
    margin-top: 42px;
    font-family: 'Arial Narrow Bold', sans-serif;
    font-size: 32px;
    font-weight: 300;
    line-height: 42px;
    text-align: center;
  }
`