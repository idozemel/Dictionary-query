import React from "react";
import { css } from "@emotion/css";
const Header = ({ children }) => {
  return (
    <>
      <header
        className={css({
          display: "flex",
          width: "100%",
          height: 54,
          backgroundColor: "#FFA1CF",
          padding: "16px 12px",
          boxSizing: "border-box",
          borderBottom: "1px solid #000",
        })}
      >
        {/* Left side */}
        {children && (
          <div
            className={css({
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            {children}
          </div>
        )}

        {/* Right side */}
        <div className={css({ marginLeft: "auto", paddingLeft: "8px" })}>
          Home assigment
        </div>
      </header>
    </>
  );
};
export default Header;
