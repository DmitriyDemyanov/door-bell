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
  text-transform: capitalize;
  position: relative;
  border-radius: 3px;
  background: var(--background-menu-item);
  box-shadow: 0 -10px 30px -20px rgba(0,0,0,0.4);
    
  .wrapper-bg{
    position: absolute;
    width: calc(100% + 2px);
    height: 96px;
    bottom: 3px;
    left: -1px;
    right: 0;
    background:var(--background-border);
    border-radius: 3px;
    z-index: -1;
  }
`
