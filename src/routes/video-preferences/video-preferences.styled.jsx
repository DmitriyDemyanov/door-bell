import styled from 'styled-components';

export const VideoPreferencesContainer = styled.div`
padding: 24px 32px 0;
font-size: 24px;
font-weight: 700;
line-height: 32px;
  .wrapper-themes{
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    
  }
  .theme-item{
    padding: 32px 41px 0;
    width:100%;
    height: 500px;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-transform: capitalize;
    text-align: center;
    position: relative;
    border-radius: 3px;
    background: var(--background-menu-item);
    box-shadow: 0 -10px 30px -20px rgba(0,0,0,0.4);
    &::after {
      content: '';
      position: absolute;
      width: calc(100% + 3px);
      height: 498px;
      bottom: 4px;
      left: -1px;
      right: 0;
      background: radial-gradient(326.89% 82.08% at 50% 0%,rgba(255,255,255,0.3) 0%,rgba(255,255,255,3e-05) 100%);
      border-radius: 3px;
      z-index: -1;
    }
    .title-item-theme{
      margin: 24px 0 ;
      font-family:  'Arial Narrow', Arial, sans-serif;
      font-size: 32px;
      font-weight: 300;
      line-height: 42px;
    }
    .wrapper-check-icon{
      margin: 0 auto;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: grey;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        width: 32px;
        height: 32px;
      }
    }
  }
  .wrapper-bright-screen {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
      width: 32px;
      height: 32px;
      opacity: 0.3;
    }
  }
`