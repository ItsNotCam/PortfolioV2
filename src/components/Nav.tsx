import { routes } from "../main";
import { Link, useLocation } from "react-router-dom";

import "./_nav.css";
import { useState } from "react";
import { Hamburger } from "./utilities/Icons";

export default function Nav() {
  const location = useLocation();
  const { pathname } = location;

  const [droppedDown, setDroppedDown] = useState<boolean>(false);

  return (
    <div id="nav" className="nav-wrapper">
      <div
        className="nav-dropdown"
        onClick={() => setDroppedDown(!droppedDown)}
      >
        <Hamburger color={droppedDown ? "#F0B65A" : "#AFAFAF"} />
      </div>
      <nav className="nav" data-dropped-down={droppedDown}>
        {routes.map((route) => (
          <Link
            key={`nav-${route.path.replace("/", "")}`}
            className={`nav-item ${
              route.path.toLowerCase() === pathname.toLowerCase() &&
              "nav-item-selected"
            }`}
            to={route.path}
            onClick={() => setDroppedDown(false)}
          >
            {route.path.replace("/", "_").toLowerCase()}
          </Link>
        ))}
      </nav>
      <div className="nav-relief" />
    </div>
  );
}
