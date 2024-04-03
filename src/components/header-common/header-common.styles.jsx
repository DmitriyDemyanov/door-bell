import styled from "styled-components";

export const HeaderCommonContainer = styled.div`
  height: 120px;
  padding:0 8px;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  .header-title{
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    .header-date {
      font-size: 20px;
      font-weight: 300;
      line-height: 24px;
      .vertical-slash{
       margin: 0 10px;
      }
    }
  }
  .item-add {
    margin-left: auto;
  }
`