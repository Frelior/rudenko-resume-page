import { StyledAboutMe } from "./AboutMe.js"
import TextTab from "../TextTab/TextTab.jsx"

export function AboutMe() {
  return (
    <TextTab>
      {" "}
      <StyledAboutMe className="tab">
        <div className="title">
          <h1>About Me</h1>
          <hr />
        </div>
        <div className="content">
          <div>
            <h2>Hello!</h2>
            <p>
              My name is <span className="blue">Mykhailo</span>. <br /> You can
              call me
              <span className="orange"> Misha or Michael</span>. <br />I am a
              beginner Front-End developer{" "}
              <span className="red underline">yet</span>.
            </p>
            <br />
            <p>
              I am passionate about creating beautiful and functional web
              applications. I am eager to expand my skills and contribute to
              exciting projects. I am currently honing my skills in development
              and looking forward to mastering many web technologies.
            </p>
            <br />
          </div>
          <div>
            <h3>Who am I?</h3>
            <p>
              In addition to a new profession, i have two years of web research
              & data entry experience in the{" "}
              <a
                href="https://globaldev.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                GlobalDev
              </a>{" "}
              company.
            </p>
            <p>
              Also i've worked as orchestra musician for more than three years.
              Actually i do music from childhood and have appropriate education,
              but now its just a hobby.
            </p>
            <br />
          </div>
          <div>
            <h3>Why i liked Front-End and development?</h3>
            <p>In my opinion I have the right traits:</p>
            <ul>
              <li>
                As a person involved in art, I love to
                <span className="blue"> create</span>.
              </li>
              <li>
                As a gamer, I love <span className="blue">challenges</span>.
              </li>
              <li>
                As a researcher, I enjoy <span className="blue">creative</span>{" "}
                work as much as <span className="blue">monotonous</span> work.
              </li>
              <li>
                As just a human, i love{" "}
                <span className="blue">become better</span>,{" "}
                <span className="blue">learn</span> something new, work and
                communicate with <span className="blue">people</span>.
              </li>
            </ul>
            <p>
              So, after trying to create my first page, I realized that I want
              to become an excellent specialist.
            </p>
            <span className="orange underline">And i'm on my way.</span>
          </div>
        </div>
      </StyledAboutMe>
    </TextTab>
  )
}
