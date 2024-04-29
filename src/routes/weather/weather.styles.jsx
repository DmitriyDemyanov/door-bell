import styled from "styled-components";

export const WeatherContainer = styled.div`
  text-align: center;
  color: var(--color-main-font);
  padding-top: 146px;
  position: absolute;
  top: 0;
  left: -24px;
  right: -24px;
  bottom: 20.4%;
  z-index: -1;
  background: var(--background-otherwise-page);

  .weather-title{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .weather-image {
    margin: 32px auto 16px;
    width: 120px;
    height: 120px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .weather-subtitle {
    font-family: 'Times New Roman', Times, serif;
    font-size: 32px;
    font-weight:300;
    line-height: 42px;
  }
  .weather-temperature {
    margin: 72px 0 16px;
    font-size: 140px;
    font-weight: 700;
    line-height: 180px;
  }
  .wrapper-weather-details {
    width:39%;
    margin: auto;
    .weather-icon{
      margin-right: 16px;
      width: 32px;
      height: 32px;
    }
    .weather-description{
      margin-bottom:16px;
      display: flex;
      align-items: center;
      font-size: 22px;
      font-weight: 700;
      line-height: 28px;
      .weather-item {
        width: 23%;
      }
      .weather-vertical-bar{
        width: 2px;
        height: 20px;
        margin: 0 24px;
        background-color: var(--color-main-font);
      }
    }
  }
  
`
export const WeatherFooter = styled.div`
  position: absolute;
  background-color: var(--background-main);
  left: -24px;
  right: -24px;
  top: 79.6%;
  bottom: 0;
  .wrapper-footer-items {
    height: 100%;
    padding: 0 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`