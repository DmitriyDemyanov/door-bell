import styled from 'styled-components';

export const SystemContainer = styled.div`
  padding: 24px 19px 48px;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .system-description-content{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 32px;
    font-weight: 300;
    line-height: 28px;
    span {
      font-weight: 700;
    }
  }
  .wrapper-system-buttons {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 16px;
  }
  .system-button{
    width:100%;
    height: 104px;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-transform: capitalize;
    position: relative;
    border-radius: 3px;
    background: var(--background-menu-item);
    box-shadow: 0 -10px 30px -20px rgba(0,0,0,0.4);
    &::after {
      content: '';
      position: absolute;
      width: calc(100% + 3px);
      height: 102px;
      bottom: 4px;
      left: -1px;
      right: 0;
      background: radial-gradient(326.89% 82.08% at 50% 0%,rgba(255,255,255,0.3) 0%,rgba(255,255,255,3e-05) 100%);
      border-radius: 3px;
      z-index: -1;
    }
  }
  
`



