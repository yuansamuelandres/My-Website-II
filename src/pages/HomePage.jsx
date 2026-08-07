import { Link } from "react-router-dom";
import "../../CSS/lectures-global.css";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <h3>
        <Link to="lectures" style={{ color: "inherit" }}>
          Lectures
        </Link>
      </h3>
    </>
  );
}

export default HomePage;
