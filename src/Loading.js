import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Loading.css";

function Loading({ size = "10x" }) {
  return (
    <FontAwesomeIcon icon="spinner" size={size} spin className="Loading" />
  );
}

export default Loading;