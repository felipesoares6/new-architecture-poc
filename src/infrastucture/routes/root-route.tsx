import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div style={{ border: "1px solid #000", margin: 16, padding: 16 }}>
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
      <div style={{ border: "1px solid #000", margin: 16, padding: 16 }}>
        <Outlet />
      </div>
    </>
  );
};
