import styled from "styled-components"

export const StyledTextWindow = styled.div`
  position: absolute;
  color: white;
  background-color: black;
  border: solid 0.2vw white;
  border-radius: 50%;
  width: 35vw;
  height: 35vw;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & .text-block {
    text-align: center;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    scrollbar-width: none;
  }
`
