import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/login" className="[&.active]:font-bold">
                Login
              </Link>
            </li>
            <Link to="/compliance" className="[&.active]:font-bold">
              Compliance List
            </Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
