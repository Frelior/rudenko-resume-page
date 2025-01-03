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
              <a
                href="https://www.montu.vision"
                target="_blank"
                rel="noreferrer noopener"
              >
                Landing page for Montu startup
              </a>
              , made together with a small team of designers and a backend
              developer and technologies like Typescript, React, Axios, Sass,
              Styled-components, Tailwind, Zustand, Yup, Formik
            </p>
            <br />
            <hr />
            <br />
            <p>
              This current resume page. Created with React, Redax toolkit,
              Styled-components, React-just-parallax.
            </p>
            <a
              href="https://github.com/Frelior/rudenko-resume-page"
              target="_blank"
              rel="noreferrer noopener"
            >
              Repository link
            </a>
            <br />
            <br />
          </div>
          <hr />
          <div className="homeworks">
            <br />
            <p>
              Here are the pages with my homework assignments that I completed
              during the course:
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
            <br />
          </div>
          <hr />
          <div className="angular">
            <br />
            <p>
              Also, there is couple of little projects, made for learning or
              solving some issues in my current job:
              <br />
              <p>
                <a
                  href="https://frelior.github.io/password-strength/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Password validator on Angular
                </a>
              </p>
              <p>
                <a href="https://frelior.github.io/formatter-rudenko/">
                  Formatter for keywords from Apollo platform.
                </a>
              </p>
              <p>
                <a href="https://frelior.github.io/danylo-cipher/">
                  Encoder just for fun
                </a>
              </p>
              <p>
                <a href="https://github.com/Frelior/mega-clicker">
                  Repository of little React Native clicker
                </a>
              </p>
            </p>
          </div>
        </div>
      </StyledProjects>
    </TextTab>
  )
}
