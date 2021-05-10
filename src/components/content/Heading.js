import React from "react";
import "./Heading.css";

const HeadingStyle = {
  fontFamily: "'Yeseva One', cursive",
};

const Heading = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "1rem",
        textTransform: "capitalize",
      }}
    >
      <p id="heading" style={{ ...HeadingStyle, fontSize: "2rem" }}>
        {props.text}
      </p>
    </div>
  );
};

export default Heading;
