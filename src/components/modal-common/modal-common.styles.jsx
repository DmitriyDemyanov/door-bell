import styled from "styled-components";

export const ModalCommonContainer = styled.div`
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 64px);
  height: 152px;
  padding: 32px 42px;
  border-radius: 3px;
  background-color: var(--background-modal);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .wrapper-icon {
    margin-right: 40px;
    width: 72px;
    height: 72px;
    display: flex;
  }
  .wrapper-title { 
  padding-left: 40px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  border-left: 1px solid rgba(151, 151, 151, 0.2);
  }
`