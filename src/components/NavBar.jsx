import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [iconToggled, setIconToggled] = useState(false);

  function handleMenu() {
    let list = document.querySelector("ul");
    let bannerDiv = document.getElementById("banner_div")
    let span = document.querySelector('span')
    console.log(iconToggled);

    iconToggled
      ? (list.classList.remove("opacity-100"), list.classList.add("opacity-0")
    ,bannerDiv.classList.remove("hidden"),
    span.classList.remove("hidden")
  )
      : (list.classList.remove("opacity-0"), list.classList.add("opacity-100")
    ,bannerDiv.classList.add("hidden"), span.classList.add("hidden"));
    setIconToggled(!iconToggled);
  }

  return (
    <>
      <div
        className="sm:justify-between
      text-center font-extrabold max-w-[95%] mx-auto text-xl flex flex-row gap-1 py-4 px-2 items-center
      relative h-20"
      >
        <div className="flex gap-1 items-center justify-center">
          <div id="banner_div" className="text-3xl w-20 transition-all">
            <a href="Banner.jpg" target="blanck">
              <img
                className="rounded-md inline-block transition-all"
                width="1562"
                height="1041"
                src="Banner.jpg"
                alt="Banner"
              />
            </a>
          </div>
          <span className="transition-all">Yuan Samuel Andrés</span>
        </div>
        <ul
          className=" lg:flex lg:flex-row-reverse
        absolute flex flex-row gap-3 items-center justify-between opacity-0 h-full w-auto
        transition-all"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#content">Content</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="/about" target="blank" >
              About
            </Link>
          </li>
        </ul>
        <div className="ml-auto lg:ml-0 *:ml-2 *:px-1 *:py-0.5">
          <button className="border-2 rounded-[50%] text-center cursor-pointer">
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button
            className="relative border-2 rounded-[50%] text-center lg:hidden
          cursor-pointer"
            onClick={handleMenu}
          >
            <FontAwesomeIcon icon={iconToggled ? faXmark : faBars} />
            {}
          </button>
        </div>
      </div>
      <hr className="w-full border-t-3" />
    </>
  );
}

export default NavBar;
