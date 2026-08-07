import "../../CSS/lectures-global.css";
import { lectures, status } from "../database/lectures.json";

function LectureCard({ source, color }) {
  return (
    <>
      <h5>
        17 Lectures{" "}
        <button
          style={
            status[source] === "Completed"
              ? { backgroundColor: "green", color: "white" }
              : { backgroundColor: "yellow", color: "black" }
          }
        >
          {status[source]}
        </button>
      </h5>
      <div className="lecture-cards">
        {Object.entries(lectures[source]).map((key) => (
          <a
            href={key[1].url}
            target="_blank"
            style={{
              backgroundImage: `url(${key[1].img})`,
              boxShadow: `0 0 1rem 0 var(${color})`,
            }}
          >
            <div className={key[0]}>
              <span style={{ color: `var(${color})` }}>{key[0]}</span>
              {/* <a href={key[1].url} target="_blank"> */}
              {/* <img src={key[1].img} alt="an image" /> */}
              {/* </a> */}
              <h3>
                <a
                  href={key[1].url}
                  target="_blank"
                  style={{ color: `var(${color})` }}
                >
                  {key[1].title}
                </a>
              </h3>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default LectureCard;
