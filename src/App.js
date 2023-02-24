import "./App.css";
import BULLET from "./media/Pointer.svg";
import photo from "./media/123.jpg";

function App() {
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
      <div className="promo">
        <h1 className="title">
          Hi, I’m Yerkebulan Omar,<br></br> I build things for the web.{" "}
        </h1>
        <h5 className="subtitle">
          I’m software developer and this is my portfolio.
        </h5>
        <button className="CV-btn">Check out my CV</button>
      </div>
      <div className="about">
        <div className="text">
          <h1 className="title">About me</h1>
          <h5 className="summary">
            I’m software developer and this is my portfolio. I’m software
            developer and this is my portfolio. I’m software developer and this
            is my portfolio. I’m software developer and this is my portfolio.
          </h5>
          <div className="bullet-points">
            <div className="bullet-point">
              <img className="bullet" src={BULLET} alt="bullet point" />
              <p className="bullet-point-text">Lorem Ipsum Description Text</p>
            </div>
            <div className="bullet-point">
              <img className="bullet" src={BULLET} alt="bullet point" />
              <p className="bullet-point-text">Lorem Ipsum Description Text</p>
            </div>
            <div className="bullet-point">
              <img className="bullet" src={BULLET} alt="bullet point" />
              <p className="bullet-point-text">Lorem Ipsum Description Text</p>
            </div>
            <div className="bullet-point">
              <img className="bullet" src={BULLET} alt="bullet point" />
              <p className="bullet-point-text">Lorem Ipsum Description Text</p>
            </div>
          </div>
        </div>
        <img className="my-photo" src={photo} alt="photo" />
      </div>
    </div>
  );
}

export default App;
