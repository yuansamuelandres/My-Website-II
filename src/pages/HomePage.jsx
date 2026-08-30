import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <>
    <NavBar/>
      <div className="max-w-[90%] mx-auto text-center">
        <h2 className="underline">
          <Link to="lectures" style={{ color: "inherit" }}>
            Lectures
          </Link>
        </h2>
      </div>
    </>
  );
}

export default HomePage;
