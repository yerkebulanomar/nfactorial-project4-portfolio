import "./App.css";
import BLUE_POINTER from "./media/Pointer.svg";
import MY_PHOTO from "./media/123.jpg";
import GITHUB from "./media/github-mark-white.svg";
import LINKEDIN_LOGO from "./media/icons8-linkedin-circled-96.svg";
import TELEGRAM_LOGO from "./media/Telegram_logo.svg";
import TypingAnimation from "./Components/TypingAnimation";
import json from "./index.json";

function App() {
  return (
    <div className="App">
      <header>
        <button
          className="header-name courier-white"
          onClick={() => window.location.replace("/#promo")}>
          Curriculum Vitae
        </button>
        <div className="nav-btns">
          <button
            className="nav-btn Inter-500 white"
            onClick={() => window.location.replace("/#about")}>
            About
          </button>
          <button
            className="nav-btn Inter-500 white"
            onClick={() => window.location.replace("/#experience")}>
            Experience
          </button>
          <button
            className="nav-btn Inter-500 white"
            onClick={() => window.location.replace("/#projects")}>
            Projects
          </button>
          <button
            className="nav-btn Inter-500 white"
            onClick={() => window.location.replace("/#contacts")}>
            Contacts
          </button>
          {/* </div> */}
        </div>
      </header>
      <div className="promo" id="promo">
        <h1 className="height title courier">
          <TypingAnimation
            text="  Hi, I’m Yerkebulan Omar,    I build things for the web."
            speed={100}
          />
        </h1>
        <h5 className="kanit subtitle">
          I’m software developer and this is my portfolio.
        </h5>
        <button
          className="CV-btn"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1tg6zEUQ-ckKAQAlEuI-zSAIMrI9sgO-T/view?usp=sharing",
              "_blank"
            );
          }}>
          Check out my CV
        </button>
      </div>
      <div className="about-me " id="about">
        <div className="text">
          <h1 className="title courier">About me</h1>
          <h5 className="kanit summary">{json.data.aboutMeSummary}</h5>
          <div className="bullet-points">
            {json.data.aboutMe.map((item, index) => (
              <div className="bullet-point" key={index}>
                <img className="bullet" src={BLUE_POINTER} alt="bullet point" />
                <p className="Inter-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <img className="my-photo" src={MY_PHOTO} alt="my pic" />
      </div>
      <div className="experience" id="experience">
        <h1 className="title courier">Experience</h1>
        <div className="workplace-list">
          {json.data.experience.map((item, index) => (
            <div className="workplace" key={index}>
              <h5 className="year courier">{item.year}</h5>
              <div className="workplace-info">
                <div className="workplace-title">
                  <img
                    className="bullet"
                    src={BLUE_POINTER}
                    alt="bullet point"
                  />
                  <h6 className="Inter-500">{item.name}</h6>
                </div>
                <h5 className="workplace-location Inter-400">{item.city}</h5>
                <h5 className="Inter-400">{item.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="projects" id="projects">
        <h1 className="title courier">Projects I've Worked On</h1>
        <div className="projects-list">
          {json.data.projects.map((item, index) => (
            <div
              className="project"
              key={index}
              style={{
                flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              }}>
              <img
                className="project-photo"
                src={require(`${item.picture}`)}
                alt="project pic"
              />
              <div className="text">
                <h2 className="project-name courier">{item.name}</h2>
                <h5 className="kanit">{item.description}</h5>
                <div className="bullet-point">
                  <img
                    className="bullet"
                    src={BLUE_POINTER}
                    alt="bullet point"
                  />

                  <a
                    className="Inter-500"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer">
                    {item.linkName}
                  </a>
                </div>
                <div className="bullet-point">
                  <img
                    className="bullet"
                    src={BLUE_POINTER}
                    alt="bullet point"
                  />
                  <h6 className="Inter-500">{item.bullet}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact" id="contacts">
        <h1 className="title courier">Say Hello</h1>
        <h5 className="kanit subtitle">{json.data.contactSubtitle}</h5>
        <div className="buttons">
          <button
            className="contact-btn"
            onClick={() => {
              window.open("https://telegram.me/yerkebulanomar", "_blank");
            }}>
            <img className="btn-img" src={TELEGRAM_LOGO} alt="linkedin" />
          </button>
          <button
            className="contact-btn"
            onClick={() => {
              window.open("https://github.com/yerkebulanomar", "_blank");
            }}>
            <img className="btn-img" src={GITHUB} alt="github" />
          </button>
          <button
            className="contact-btn"
            onClick={() => {
              window.open("https://www.linkedin.com", "_blank");
            }}>
            <img className="btn-img" src={LINKEDIN_LOGO} alt="linkedin" />
          </button>
        </div>
      </div>
      <footer>
        <p className="Inter-500">
          Made with ❤️ at{" "}
          <a href="https://www.nfactorial.school/">nFactorial</a> in 2023
        </p>
        <p className="Inter-500 grey-text">
          Credits: icons from <a href="https://icons8.com/">Icons8</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
