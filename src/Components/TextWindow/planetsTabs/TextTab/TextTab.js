import styled from "styled-components"
import "../textVariables.css"

export const StyledTextTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  & > * {
    width: 100%;
  }

  .title {
    padding: 1vw 0 4vw 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    hr {
      width: 100%;
    }

    h1 {
      text-shadow: 0vw 0vw 3vw white;
      background-color: var(--about-me-title-bg-color);
      border-radius: 50%;
      box-shadow: 0 0 3vw 4vw var(--about-me-title-bg-color);
    }
  }

  .content {
    padding-bottom: 7vw;

    .blue {
      text-shadow: var(--text-shadow-blue);
    }
    .orange {
      text-shadow: var(--text-shadow-orange);
    }
    .red {
      text-shadow: var(--text-shadow-red);
    }
    .purple {
      text-shadow: var(--text-shadow-purple);
    }
    .underline {
      text-decoration: underline;
    }

    p {
      text-wrap: pretty;
    }
    h2,
    h3,
    h4 {
      margin-bottom: 0.3vw;
      padding: 0.1vw 0;
      box-shadow: 0 0 0.3vw 0.1vw #fff;
      background-color: #191919;
      border-radius: 2vw;
    }
    a {
      color: #3584ff;
      &:visited {
        color: #3584ff;
      }
    }
    ul {
      list-style-type: none;
      text-align: left;
    }
  }
    .underline {
      text-decoration: underline;
    }
`
