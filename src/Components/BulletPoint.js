import BLUE_POINTER from "../media/Pointer.svg";
import "../App.css";

export default function BulletPoint({ item }) {
  return (
    <div className="bullet-point">
      <img className="bullet" src={BLUE_POINTER} alt="bullet point" />
      <p className="Inter-500">{item}</p>
    </div>
  );
}
