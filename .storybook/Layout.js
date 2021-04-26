import React from "react";
import "./exportedStyles";
import "./customStyles";
import "./story";

const Layout = ({ children }) => {
  return <div className="px-5 py-5">{children}</div>;
};
export default Layout;
