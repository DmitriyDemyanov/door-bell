import styled from "styled-components";

export const CameraItemContainer = styled.div`
    position: relative;
    width: 244px;
    height: 244px;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    color: #fff;
    display: flex;
    align-items: end;
    border-radius: 3px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--bg-camera-item);
    
    .camera-title {
        width: 100%;
        height: 41%;
        padding: 32px 32px 16px 20px;
        background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .check-camera-svg{
        svg{
            width: 150px;
            height: 150px;
            z-index: 10;
            opacity: 0.7;
        }
    }
`
