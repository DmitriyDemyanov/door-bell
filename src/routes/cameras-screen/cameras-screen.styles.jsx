import styled from "styled-components"

export const CamerasScreenContainer = styled.div`
  width: 100%;
  padding: 20px 24px 0;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 16px;
  max-height: 790px;
  overflow-y: auto;
`

export const NoCamerasContainer = styled.div`
  position: absolute;
  width: 65%;
  min-height: 268px;
  top: calc(120px + 214px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .no-camera-icon {
    width: 120px;
    height: 120px;
  }
  .no-camera-title {
    margin-top: 64px;
    text-align: center;
    font-size: 32px;
    font-weight: 300;
    line-height: 42px;
  }
`



