import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LectureCard from "../../components/LectureCard";
import "../../../CSS/lectures-global.css";

function submitButton() {
  alert("This feature is not working at the moment");
  // e.preventDefault();
}

function tajweed() {
  return (
    <div className="container">
      <div className="lecture-header">
        <h4>Lectures</h4>
        <h1 style={{direction:"rtl", color: "var(--clr-text-t)"}}>التجويد</h1>
        <h4><u>First</u> step in Learning Quran Roadmap</h4>

        <div className="search-bar">
          <button type="submit" onClick={submitButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input type="text" placeholder="Search by title" onChange={submitButton}/>
        </div>

      </div>

      <div className="lecture-main">
        <LectureCard source="tajweed" color="--clr-text-t"/>
      </div>
    </div>
  );
}

export default tajweed;
