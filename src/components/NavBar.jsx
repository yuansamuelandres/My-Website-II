import { Link } from "react-router-dom";
import "../../CSS/lectures-global.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/html/tajweed">التجويد</Link>
      <Link to="/html/SH">الشاطبية</Link>
      <Link to="/html/D">الدرة</Link>
    </div>
  );
}

export default NavBar;
