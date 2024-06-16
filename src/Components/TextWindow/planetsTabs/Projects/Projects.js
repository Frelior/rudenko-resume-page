import styled from "styled-components"

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & .title {
    padding: 1vw 0 4vw 0;

    & h1 {
      text-shadow: 0vw 0vw 3vw white;
      background-color: var(--projects-title-bg-color);
      border-radius: 50%;
      box-shadow: 0 0 3vw 4vw var(--projects-title-bg-color);
    }
  }

  & .content {
    padding-bottom: 4vw;
  }
`
