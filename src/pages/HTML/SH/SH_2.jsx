import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LectureCard from "../../../components/LectureCard";
import "../../../../CSS/lectures-global.css";

function submitButton() {
  alert("This feature is not working at the moment");
  // e.preventDefault();
}

function SH_2() {
  return (
    <div className="container">
      <div className="lecture-header">
        <h4>Lectures</h4>
        <h1 style={{ direction: "rtl", color: "var(--clr-text-sh)" }}>
          فرش الشاطبية
        </h1>
        <img
        className="part-img"
          src="https://images.unsplash.com/photo-1606035021246-a8f2f2d58de6?q=80&w=936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Branches"
        />
        <h4>
          <u>Second</u> step in Learning Quran Roadmap
        </h4>

        <div className="search-bar">
          <button type="submit" onClick={submitButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="Search by title"
            onChange={submitButton}
          />
        </div>

        <h5>
          17 Lectures{" "}
          <button style={{ backgroundColor: "yellow", color: "black" }}>
            Ongoing
          </button>
        </h5>
      </div>

      <div className="lecture-main">
        <LectureCard source="SH_2" color="--clr-text-sh" />
      </div>
    </div>
  );
}

export default SH_2;
