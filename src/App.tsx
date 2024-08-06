import { useState } from "react";
import React from "react";
import "./App.css";
import Chessboard from "./components/Chessboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Chessboard />
    </>
  );
}

export default App;
