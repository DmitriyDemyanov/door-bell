import styled from "styled-components";

export const GlobalLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 900;
`
export const LoaderIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 20vmin;
  height: 20vmin;
  background-color: #dc0000;
  border-radius: 50%;
  z-index: 1000;
`

