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
            <span className="blue underline">I will study Java or Kotlin</span>.
          </p>
          <br />
          <p>
            It may be very ambitious for a beginner, but{" "}
            <span className="blue underline">
              I'm not going to mark time for years while time flies.
            </span>{" "}
            I want to improve methodically, following development trends, so
            that I can become an excellent full-stack developer and one day
            contribute to some truly great project.
          </p>
          <br />
          <hr />
          <br />
          <p>
            So, while some steps may change or be inaccurate due to my
            inexperience, my roadmap for now is:
          </p>
          <br />
          <ul>
            <li>Gain real experience in Front-End development.</li>
            <li>
              Master Front-End technologies, including layout, TypeScript and
              becoming proficient in React and explore other frameworks like
              Angular and Vue.js.
            </li>
            <li>
              Expand Back-End knowledge with Node.js, SQL, and maybe Go or
              Python.
            </li>
            <li>
              Dive into Mobile Development by studying React Native and Kotlin.
            </li>
          </ul>
        </div>
      </StyledGoals>
    </TextTab>
  )
}
