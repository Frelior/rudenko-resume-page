import { StyledGoals } from "./Goals.js"
import TextTab from "../TextTab/TextTab.jsx"

export function Goals() {
  return (
    <TextTab>
      <StyledGoals>
        <div className="title">
          <h1>My Goals</h1>
        </div>
        <div className="content">
          <p>
            My main need now is obviously to{" "}
            <span className="red underline">get real experience</span>. I need
            to learn to work in a team, master new technologies, and improve
            those that I already know. However, any path becomes easier if you
            have a goal.
          </p>
          <br />
          <p>
            In addition to web development, I would like to do mobile
            development in the future, so{" "}
            <span className="blue ">I will study Java or Kotlin</span>.
          </p>
          <br />
          <hr />
        </div>
      </StyledGoals>
    </TextTab>
  )
}
