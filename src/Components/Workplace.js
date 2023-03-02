import BLUE_POINTER from "../media/Pointer.svg";
import "../App.css";

export default function Workplace({ item }) {
  return (
    <div className="workplace">
      <h5 className="year courier">{item.year}</h5>
      <div className="workplace-info">
        <div className="workplace-title">
          <img className="bullet" src={BLUE_POINTER} alt="bullet point" />
          <h6 className="Inter-500">{item.name}</h6>
        </div>
        <h5 className="workplace-location Inter-400">{item.city}</h5>
        <h5 className="Inter-500">{item.description}</h5>
      </div>
    </div>
  );
}
