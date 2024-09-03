import React from "react";
import { Link, Outlet } from "react-router-dom";
import { URL } from "./urls.ts";

export const Root = () => {
  return (
    <>
      <div style={{ border: "1px solid #000", margin: 16, padding: 16 }}>
        <nav>
          <ul>
            <Link to={URL.COMPLIANCE_LIST} className="[&.active]:font-bold">
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
