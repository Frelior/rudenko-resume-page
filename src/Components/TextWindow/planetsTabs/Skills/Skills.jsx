import { StyledSkills } from "./Skills.js"
import TextTab from "../TextTab/TextTab.jsx"

export function Skills() {
  return (
    <TextTab>
      <StyledSkills>
        <div className="title">
          <h1>Skills</h1>
        </div>
        <div className="content">
          <h3>Here is my skills and technologies stack:</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>JavaScript ES14</li>
            <li>React</li>
            <li>Redux toolkit</li>
            <li>Styled-components</li>
            <li>Formik</li>
            <li>Bootstrap</li>
            <li>React-just-parallax</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </StyledSkills>
    </TextTab>
  )
}
