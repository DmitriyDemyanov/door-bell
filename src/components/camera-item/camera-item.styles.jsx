import styled from "styled-components";

export const CameraItemContainer = styled.div`
  position: relative;
  width: 244px;
  height: 244px;
  padding: 0 32px 16px 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  display: flex;
  align-items: end;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.15);
  svg {
    position: absolute;
    top: 75px;
    left: 98px;
    z-index: -1;
  }
`