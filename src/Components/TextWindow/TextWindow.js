import styled from "styled-components"

export const StyledTextWindow = styled.div`
  --about-me-title-bg-color: #0c78ff5c;
  --contacts-title-bg-color: #e83efb5c;
  --projects-title-bg-color: #ff9a695c;
  --goals-title-bg-color: #57ffd05c;
  --skills-title-bg-color: #4444445c;

  position: absolute;
  color: white;
  background-color: #000000e3;
  border: solid 0.2vw #ffffff1a;
  box-shadow: 0 0 1.5vw 1.1vw black, 0 0 2vw 2vw #0000005c;
  border-radius: 50%;
  width: 34vw;
  height: 34vw;
  min-width: 538px;
  min-height: 538px;
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
    overflow: auto;
    scrollbar-width: none;
    opacity: 1;
    transition: opacity 0.3s ease;
`
