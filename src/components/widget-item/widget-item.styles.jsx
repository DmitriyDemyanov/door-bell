import styled from "styled-components";

export const WidgetItemContainer = styled.div`
  width:100%;
  height: 98px;
  margin-top: 16px;
  padding:0 32px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 300;
  position: relative;
  border-radius: 3px;
  background: linear-gradient(180deg, #333333, #202020);

   .wrapper-bg{
    position: absolute;
    width: calc(100% + 2px);
    height: 96px;
    bottom: 3px;
    left: -1px;
    right: 0;
    background:radial-gradient(ellipse at top, rgba(255, 255, 255, 0.4) 20%, transparent 90%);
    border-radius: 3px;
    z-index: -1;
  }
`