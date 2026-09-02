import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LectureCard from "../../../components/LectureCard";
import "../../../../CSS/lectures-global.css";

function submitButton() {
  alert("This feature is not working at the moment");
  // e.preventDefault();
}

function F_1() {
  return (
    <div className="container">
      <div className="lecture-header">
        <h4>Lectures</h4>
        <h1 style={{ direction: "rtl", color: "var(--clr-text-f)" }}>
          أصول الفوائد
        </h1>
        <img
        className="part-img"
          src="https://images.unsplash.com/photo-1531379115628-32ab7454986c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Origins"
        />
        <h4>
          <u>Third</u> step in Learning Quran Roadmap
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

      </div>

      <div className="lecture-main">
        <LectureCard source="F_1" color="--clr-text-f" />
      </div>
    </div>
  );
}

export default F_1;
