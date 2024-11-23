import React from "react";

const Greeting = ({ props }) => {
  console.log(props);
  return <div>{props != "" && <p>Hello {props}!</p>}</div>;
};

export default Greeting;
