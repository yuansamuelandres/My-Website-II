import "../../CSS/lectures-global.css";
import { tajweed } from "../database/lectures.json";

function LectureCard() {
  return (
    <div className="lecture-cards">
      {Object.entries(tajweed).map((key) => (
        <a href={key[1].url} target="_blank" style={{ backgroundImage: `url(${key[1].img})` }}>
          <div className={key[0]}>
            <span>{key[0]}</span>
            <a href={key[1].url} target="_blank">
              {/* <img src={key[1].img} alt="an image" /> */}
            </a>
            <h3>
              <a href={key[1].url} target="_blank">{key[1].title}</a>
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default LectureCard;
