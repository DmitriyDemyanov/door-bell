import styled from 'styled-components';

export const SettingItemContainer = styled.div`
  width: 100%;
  height: 98px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 300;
  line-height: 42px;
  position: relative;
  border-radius: 3px;
  background: var(--background-menu-item);
  ::after {
    content: '';
    position: absolute;
    width: calc(100% + 2px);
    height: 96px;
    bottom: 3px;
    left: -1px;
    right: 0;
    background:var(--background-border);
    border-radius: 3px;
    z-index: -1;
  }
  
`