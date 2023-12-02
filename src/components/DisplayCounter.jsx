import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Current value of the counter is: {counter}.</p>
    </>
  );
};

export default DisplayCounter;
