import { StyledProjects } from "./Projects.js"
import TextTab from "../TextTab/TextTab.jsx"

export function Projects() {
  return (
    <TextTab>
      <StyledProjects>
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="content">
          <p>
            Since I just finished the course, my most impressive project is
            <span className="blue"> current page</span>.<br />
            When creating it, I used libraries such as{" "}
            <span className="orange">
              React, Redax toolkit, Styled-components, React-just-parallax
            </span>
            . And I had to tinker a little with Photoshop :) <br />
            Repository link: <a href=""></a>
          </p>
        </div>
      </StyledProjects>
    </TextTab>
  )
}
