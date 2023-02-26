import "./App.css";
import BLUE_POINTER from "./media/Pointer.svg";
import MY_PHOTO from "./media/123.jpg";
import ORANGE_POINTER from "./media/Orange point.svg";
import TO_DO_LIST from "./media/todolist.PNG";
import PEOPLE_PRO from "./media/peoplepro.PNG";

function App() {
  const aboutMe = [
    "SDU, KTL alumni",
    "Java, HTML, CSS, Javascript, React JS",
    "English, Russian, Kazakh, Turkish",
  ];

  const experience = [
    {
      id: 0,
      year: "2022",
      name: "nFactorial Full-stack course",
      city: "Kazakhstan, Astana",
      description:
        "Learnt Java basics, HTML5 ,CSS, Javascript, React JS, Bootstrap, Material UI, Redux during 6 months course",
    },

    {
      id: 1,
      year: "2023",
      name: "Freelance Webdeveloper",
      city: "Kazakhstan, Astana",
      description:
        "Develop website visuals and interfaces using React JS, HTML and CSS",
    },
  ];

  const projects = [
    {
      id: 0,
      name: "To-Do List",
      picture: TO_DO_LIST,
      description:
        "Study project that includes opening of several modal windows, addition of new items, changing categories and deleting of items",
      link: "https://nfactorial-to-do-list.vercel.app/",
      linkName: "nfactorial-to-do-list.vercel.app",
      bullet: "HTML, CSS, React JS, Bootstrap",
    },
    {
      id: 1,
      name: "People Pro website",
      picture: PEOPLE_PRO,
      description:
        "Website visuals and inteface for a non-profit organization with several opening pages, several forms that gather information into Google Document",
      link: "https://peoplepro.vercel.app/",
      linkName: "peoplepro.vercel.app",
      bullet: "HTML, CSS, React JS, Bootstrap",
    },
  ];

  return (
    <div className="App">
      <header>
        <h3 className="header-name">Yerkebulan Omar</h3>
        <div className="nav-btns">
          <button className="nav-btn">About</button>
          <button className="nav-btn">Experience</button>
          <button className="nav-btn">Projects</button>
          <button className="nav-btn">Contacts</button>
        </div>
      </header>
      <div className="promo section">
        <h1 className="title">
          Hi, I’m Yerkebulan Omar,<br></br> I build things for the web.{" "}
        </h1>
        <h5 className="kanit subtitle">
          I’m software developer and this is my portfolio.
        </h5>
        <button className="CV-btn">Check out my CV</button>
      </div>
      <div className="about-me section">
        <div className="text">
          <h1 className="title">About me</h1>
          <h5 className="kanit summary">
            I’m software developer and this is my portfolio. I’m software
            developer and this is my portfolio. I’m software developer and this
            is my portfolio. I’m software developer and this is my portfolio.
          </h5>
          <div className="bullet-points">
            {aboutMe.map((item, index) => (
              <div className="bullet-point" key={index}>
                <img className="bullet" src={BLUE_POINTER} alt="bullet point" />
                <p className="bullet-point-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <img className="my-photo" src={MY_PHOTO} alt="my pic" />
      </div>
      <div className="experience section">
        <h1 className="title">Experience</h1>
        <div className="workplace-list">
          {experience.map((item, index) => (
            <div className="workplace" key={index}>
              <h5 className="year">{item.year}</h5>
              <div className="workplace-info">
                <div className="workplace-title">
                  <img
                    className="bullet"
                    src={ORANGE_POINTER}
                    alt="bullet point"
                  />
                  <h6 className="workplace-name">{item.name}</h6>
                </div>
                <h5 className="workplace-location">{item.city}</h5>
                <h5 className="workplace-description">{item.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="projects section">
        <h1 className="title">Projects I've Worked On</h1>
        <div className="projects-list">
          {projects.map((item, index) => (
            <div
              className="project"
              key={index}
              style={{
                flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              }}>
              <img
                className="project-photo"
                src={item.picture}
                alt="project pic"
              />
              <div className="text">
                <h2 className="project-name">{item.name}</h2>
                <h5 className="kanit">{item.description}</h5>
                <div className="bullet-point">
                  <img
                    className="bullet"
                    src={BLUE_POINTER}
                    alt="bullet point"
                  />

                  <a
                    className="bullet-point-text"
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
                  <h6 className="bullet-point-text">{item.bullet}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
