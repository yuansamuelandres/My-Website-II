import { Link } from "react-router-dom";

function Lectures() {
  return (
    <div className="container">
      <h1>Lectures</h1>
      <div className="text-center">
        <div className="border-2 rounded-md pb-3">
          <h2>قسم القرآن العظيم</h2>
          <ul dir="rtl" className="grid grid-cols-3 gap-5 *:py-2 *:rounded-md *:font-black *:bg-black">
            <li className="text-text-t shadow-[0_0_1rem_0_var(color-text-t)]">
              <Link to="../html/tajweed">التجويد</Link>
            </li>
            <li className="text-text-sh">
              <Link to="../html/sh">الشاطبية</Link>
            </li>
            <li className="text-text-d">
              <Link to="../html/d">الدرة</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Lectures;
