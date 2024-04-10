
import styled from "styled-components";


export const CallHistoryComponent = styled.div`
  padding: 24px 32px 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;

  .wrapper-setting-item {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
  }
  .call-history-sub-title {
    margin: 24px 0 20px;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    color: rgb(159, 159, 159);
  }
  .call-history-bar {
    margin: 32px 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 31.77%, #FFFFFF 69.79%, rgba(255, 255, 255, 0.0001) 100%);
    opacity: 0.5;

  }
`