import React, { useState } from "react";

import Board from "./components/Board";
import "./App.css";

const App = () => {
  const [light, setLight] = useState(true);
  return (
    <div className={`App ${light && "light"}`}>
      <button onClick={() => setLight(!light)}>
        {light ? "darkMode" : "lightMode"}
      </button>
      <Board></Board>
    </div>
  );
};

export default App;
