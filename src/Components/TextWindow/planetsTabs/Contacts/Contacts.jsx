import { StyledContacts } from "./Contacts.js"
import TextTab from "../TextTab/TextTab.jsx"

export function Contacts() {
  return (
    <TextTab>
      <StyledContacts>
        <div className="title">
          <h1>Contacts</h1>
        </div>
        <div className="content">
          <div className="location">
            <h3>
              <img
                src="/images/icons/location.png"
                alt="location"
              />
              Where am i from?
            </h3>
            <p>I am from Kharkiv city, but currently live in Poltava.</p>
          </div>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/mykhailo-rudenko-a6307314b/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/icons/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/Frelior"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/icons/github.png"
                alt="GitHub"
              />
            </a>
            <a href="mailto:fernandosolotop@gmail.com">
              <img
                src="/images/icons/mail.png"
                alt="Mail"
              />
            </a>
            <a
              href="https://t.me/annoyedartist"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/icons/telegram.png"
                alt="Telegram"
              />
            </a>
          </div>
          <div className="phone">
            <p>Phone: +38 (099) 123-45-67</p>
            <p>Email: fernandosolotop@gmail.com</p>
          </div>
        </div>
      </StyledContacts>
    </TextTab>
  )
}
