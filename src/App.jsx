import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chessboard from "./components/Chessboard";

function App() {
  return (
    <>
      <div>
        <Chessboard />
      </div>
    </>
  );
}

export default App;
