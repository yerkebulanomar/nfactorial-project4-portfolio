import "./App.css";

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
    </div>
  );
}

export default App;
