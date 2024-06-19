import { StyledProjects } from "./Projects.js"
import TextTab from "../TextTab/TextTab.jsx"

export function Projects() {
  return (
    <TextTab>
      <StyledProjects>
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="content"></div>
      </StyledProjects>
    </TextTab>
  )
}
