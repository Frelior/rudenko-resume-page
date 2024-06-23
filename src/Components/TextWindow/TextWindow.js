import styled from "styled-components"

export const StyledTextWindow = styled.div`
  position: absolute;
  color: white;
  background-color: #000000e3;
  border: solid 0.2vw #ffffff1a;
  box-shadow: 0 0 1.5vw 1.1vw black, 0 0 2vw 2vw #0000005c;
  border-radius: 50%;
  width: var(--text-window-size);
  height: var(--text-window-size);
  min-width: var(--text-window-min-size);
  min-height: var(--text-window-min-size);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & .text-block {
    text-align: center;
    width: 100%;
    padding: 0 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    scrollbar-width: none;
    opacity: 1;
    transition: opacity 0.3s ease;
`
