import "./App.css";
import React from "react";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Wrapper from "./components/Wrapper";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

const App = () => {
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      <div
        className="px-4 py-5 my-5 text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Wrapper>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <Privacy /> : <DisplayCounter />}
            <Controls />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default App;
