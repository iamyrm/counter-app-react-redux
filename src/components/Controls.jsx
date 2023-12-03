import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";
import { privacyActions } from "../../store/privacy";


const Controls = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.addition(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtraction(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          ref={inputElement}
          className="number-input"
          type="text"
          placeholder="Enter number."
        />

        <button
          type="button"
          onClick={handleAdd}
          className="btn btn-info btn-lg px-4"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleSubtract}
          className="btn btn-danger btn-lg px-4"
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
