import BLUE_POINTER from "../media/Pointer.svg";
import "../App.css";

export default function Project({ item, index }) {
  return (
    <div
      className="project"
      style={{
        flexDirection: index % 2 === 1 ? "row-reverse" : "row",
      }}>
      <img
        className="project-photo"
        src={require(`../media/${item.picture}`)}
        alt="project pic"
      />
      <div className="text">
        <h2 className="project-name courier">{item.name}</h2>
        <h5 className="kanit">{item.description}</h5>
        <div className="bullet-point">
          <img className="bullet" src={BLUE_POINTER} alt="bullet point" />

          <a
            className="Inter-500"
            href={item.link}
            target="_blank"
            rel="noreferrer">
            {item.linkName}
          </a>
        </div>
        <div className="bullet-point">
          <img className="bullet" src={BLUE_POINTER} alt="bullet point" />
          <h6 className="Inter-500">{item.bullet}</h6>
        </div>
      </div>
    </div>
  );
}
