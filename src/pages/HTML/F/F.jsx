import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../../../CSS/lectures-global.css";

function submitButton() {
  alert("This feature is not working at the moment");
  // e.preventDefault();
}

function F() {
  return (
    <div className="container">
      <div className="lecture-header">
        <h4>Lectures</h4>
        <h1 style={{ direction: "rtl", color: "var(--clr-text-f)" }}>
          الفوائد
        </h1>
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

        <h5>
          12 Lectures{" "}
          <button style={{ backgroundColor: "yellow", color: "black" }}>
            Ongoing
          </button>
        </h5>
      </div>

      <div className="lecture-main">
        <div className="part1">
          <Link to="F_1">أبواب اﻷصول</Link>
        </div>
        <div className="part2">
          <Link to="F_2">باب فرش الحروف</Link>
        </div>
      </div>
    </div>
  );
}

export default F;
