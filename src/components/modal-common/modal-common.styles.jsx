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
  .wrapper-icon {
    height: 72px;
    display: flex;
    img {
      width: 72px;
      height: 100%;
      object-fit: cover;
    }
    &::after {
      content: '';
      margin-left:40px;
      width: 1px;
      height: 100%;
      background: rgba(151, 151, 151, 0.2);
    }
  }
  .wrapper-title { 
  padding-left: 40px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;

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

