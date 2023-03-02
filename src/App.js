import "./App.css";
import MY_PHOTO from "./media/123.jpg";
import GITHUB from "./media/github-mark-white.svg";
import LINKEDIN_LOGO from "./media/icons8-linkedin-circled-96.svg";
import TELEGRAM_LOGO from "./media/Telegram_logo.svg";
import TypingAnimation from "./Components/TypingAnimation";
import json from "./index.json";
import BulletPoint from "./Components/BulletPoint";
import Workplace from "./Components/Workplace";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <header>
        <button
          className="header-name courier-white"
          onClick={() => {
            window.location.replace("/#promo");
          }}>
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
              <BulletPoint item={item} key={index} />
            ))}
          </div>
        </div>
        <img className="my-photo" src={MY_PHOTO} alt="my pic" />
      </div>
      <div className="experience" id="experience">
        <h1 className="title courier">Experience</h1>
        <div className="workplace-list">
          {json.data.experience.map((item, index) => (
            <Workplace item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="projects" id="projects">
        <h1 className="title courier">Projects I've Worked On</h1>
        <div className="projects-list">
          {json.data.projects.map((item, index) => (
            <Project item={item} key={index} index={index} />
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
