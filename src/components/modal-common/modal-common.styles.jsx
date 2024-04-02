import styled from "styled-components";

export const ModalCommonContainer = styled.div`
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 64px);
  min-height: 152px;
  padding: 32px 42px;
  border-radius: 3px;
  background-color: var(--background-modal);
  z-index: 1;
  display: flex;
  align-items: center;

  .wrapper-icon {
    margin-right:40px;
    display: flex;
    align-items:center;
    height: 72px;
    width: 72px;
    border-radius: 50%;
    background-color: #BBBBBB;
    svg {
      width: 36px;
      height: 36px;
      object-fit: cover;
    }
  }
  .wrapper-title { 
  min-height: 88px;
  padding-left: 40px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  border-left: 1px solid rgba(151,151,151,0.2);
  display: flex;
  align-items: center;
    span {
      display: contents;
      text-transform: capitalize;
    }
  }
`
export const WrapperRenderModal = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
right: 0;
left: 0;
background: transparent;
z-index: 100;
`

