import React from "react";
import FistComponent from "./fistComponent";
import "./app.less";

const App = () => {
  return (
    <div className="title">
      <div>
        <div>hello Webpack</div>
        <FistComponent />
      </div>
    </div>
  );
};

export default App;
