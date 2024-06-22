import { StyledGoals } from "./Goals.js"
import TextTab from "../TextTab/TextTab.jsx"

export function Goals() {
  return (
    <TextTab>
      <StyledGoals>
        <div className="title">
          <h1>My goals</h1>
        </div>
        <div className="content">
          <p>
            Obviously, my main goal now is to gain real experience. I need to
            learn to work in a team, learn technologies that are new to me and
            improve those that I already know. However, looking ahead, I want to
            set myself a long-term goal.
          </p>
          <p>
            My Goals Obviously, my main goal now is to gain real experience. I
            need to learn to work in a team, learn technologies that are new to
            me, and improve those that I already know. However, looking ahead, I
            want to set myself a long-term goal and a list of short-term ones.
            Long-term Goal: In general, I want to become a proficient full-stack
            developer. This involves being adept at both front-end and back-end
            technologies, understanding the entire application lifecycle, and
            being able to contribute effectively at every stage of development.
            Short-term Goals: Improve Collaboration Skills: Learn to work
            efficiently in a team setting, using tools like Git for version
            control and participating in code reviews. Gain experience in Agile
            methodologies and improve my ability to communicate technical
            concepts clearly. Enhance Front-end Skills: Deepen my understanding
            of vanilla JavaScript and modern frameworks like React. Explore and
            integrate smaller libraries that can enhance user interfaces and
            improve performance. Learn TypeScript: Master TypeScript to write
            more robust and maintainable code. Understand its benefits in
            large-scale applications and how it can help in catching errors
            early in the development process. Expand Back-end Knowledge: Gain
            proficiency in Node.js to develop server-side applications. Explore
            other back-end technologies like PHP, Python, and possibly Go, to
            have a diverse skill set and understand different server-side
            paradigms. Build Full-Stack Projects: Create and deploy full-stack
            projects that combine my front-end and back-end knowledge. Use these
            projects to experiment with different technologies and understand
            how to integrate them effectively. Stay Updated with Industry
            Trends: Continuously learn about new technologies, tools, and best
            practices in the industry. Participate in online courses, workshops,
            and conferences to stay current with the latest developments. By
            focusing on these goals, I aim to build a solid foundation as a
            full-stack developer and prepare myself for the diverse challenges
            that come with this role. Each step will bring me closer to becoming
            a versatile and effective developer, capable of handling complex
            projects from conception to deployment.
          </p>
        </div>
      </StyledGoals>
    </TextTab>
  )
}
