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
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Redux toolkit</li>
            <li>
              TypeScript: Basic types, Interfaces, Generics, Type Assertions
            </li>
            <li>Angular: Components, Modules, Services, Angular CLI</li>
            <li>Build Tools: Webpack, Babel</li>
            <li>Package Managers: npm, Yarn</li>
            <li>Jest</li>
            <li>API Integration: RESTful APIs, Fetch, Axios</li>
            <li>Styled-components</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </StyledSkills>
    </TextTab>
  )
}
