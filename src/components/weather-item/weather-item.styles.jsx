import styled from "styled-components";

export const WeatherItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
  .weather-item-icon {
    margin: 12px 0;
    width: 36px;
    height: 36px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .weather-item-degrees {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }
`