import React from "react";
import Board from "./Board";
import Menu from "./Menu";

const App = () => {
  //get winner & current team data from board-> to Menu
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <Board />
      <Menu team="X" winner="x" />
    </div>
  );
};

export default App;
