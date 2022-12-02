import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./BreadCrumb.css";

function BreadCrumb({ folder }) {
  return (
    <div className="crumbs">
      <div className="arrow">
        <FaArrowRight />
      </div>
      <div className="folder-name">{folder}</div>
    </div>
  );
}

export default BreadCrumb;
