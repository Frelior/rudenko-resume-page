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
          <div className="current-page">
            <p>
              Since I just finished the course, my most impressive project is
              <span className="blue"> current page</span>.
            </p>
            <p>
              When creating it, I used libraries such as{" "}
              <span className="orange">
                React, Redax toolkit, Styled-components, React-just-parallax
              </span>
              . And I had to tinker a little with Photoshop :)
            </p>
            <a
              href="https://github.com/Frelior/rudenko-resume-page"
              target="_blank"
              rel="noreferrer noopener"
            >
              Repository link
            </a>
            <small>
              <br />
              At this point I'm gonna make unit tests and refactoring, cause im
              still working on it.
            </small>
          </div>
          <hr />
          <div className="homeworks">
            <p>
              Also, here are the pages with my homework assignments that I
              completed during the course:
              <div>
                <a
                  href="https://frelior.github.io/Rudenko-FrontEndPro-12.01.2024/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Homeworks without React
                </a>
                <br />
                <a
                  href="https://frelior.github.io/homework33-react"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Homeworks with React
                </a>
              </div>
              <p>
                In homeworks I used such technologies and tools as AJAX,
                promises, fetch, Axios, local/session storages, cookies, React,
                formik, yup, react-router, Redux toolkit, Redux-thunk etc.
              </p>
            </p>
          </div>
          <hr />
          <div className="angular">
            <p>
              Also, I spent a little time getting to know Angular and did a
              little password validation.
              <br />
              <a href="https://github.com/Frelior/password-strength">Github</a>
              <br />
              <a href="https://frelior.github.io/password-strength/">Page</a>
            </p>
          </div>
        </div>
      </StyledProjects>
    </TextTab>
  )
}
