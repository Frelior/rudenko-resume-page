import styled from "styled-components"

export const StyledPlanetsCanvas = styled.div`
  background-color: #ff00006b;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-around;

  & .container {
    position: relative;
    width: 600px;
    height: 600px;
    border: 2px solid black;
    border-radius: 50%;

    .planets {
      border: 2px groove blue;
      position: relative;
      left: -50%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;

      .planet {
        position: absolute;
        width: 40%;
        height: 40%;
        border-radius: 50%;
        // border: 1px solid #fff;
        // box-shadow: 0 0 0 4px #222, 0 0 0 6px #fff;
        // overflow: hidden;
        transform: rotate(calc(360deg / ${(props) => props.length} * var(--i)));
        transform-origin: 360px;
        & p {
          position: absolute;

          transform: rotate(
            calc(-360deg / ${(props) => props.length} * var(--i))
          );
          // translate(-50%, -50%);
        }
      }
    }
  }

  // .about-me {
  //   background-image: url(/images/planets/about-me.png);
  // }
  // .skills {
  //   background-image: url(/images/planets/skills.png);
  // }
  // .projects {
  //   background-image: url(/images/planets/projects.png);
  // }
  // .contact {
  //   background-image: url(/images/planets/projects.png);
  // }
  // .resume {
  //   background-image: url(/images/planets/projects.png);
  // }
`
