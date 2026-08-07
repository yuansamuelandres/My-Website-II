import { Link } from "react-router-dom";
import "../../CSS/lectures-global.css";

function Lectures() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Lectures</h1>
      <div className="grid">
        <div className="flex">
          <h2 style={{ textAlign: "center" }}>قسم القرآن العظيم</h2>
          <ul className="grid">
            <li className="tajweed">
              <Link to="../HTML/tajweed">التجويد</Link>
            </li>
            <li className="sh">
              <Link to="../HTML/sh">الشاطبية</Link>
            </li>
            <li className="d">
              <Link to="../HTML/d">الدرة</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Lectures;
