import React from "react";
import { Link } from "react-router-dom";

const Box = ({ capital, image }) => {
  const boxStyle = {
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
    margin: ".5rem",
  };

  return (
    <Link style={boxStyle}>
      <h1>{capital}</h1>
    </Link>
  );
};

export default Box;
