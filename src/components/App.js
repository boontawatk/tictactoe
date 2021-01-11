import React, { useState } from "react";
import Board from "./Board";
import Menu from "./Menu";

const App = () => {
  //get winner & current team data from board-> to Menu
  const [team, setTeam] = useState("false");
  const [winner, setWinner] = useState(null);
  const currentTeam = team ? "X" : "O";
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <Board team={team} setTeam={setTeam} setWinner={setWinner} />
      <Menu team={currentTeam} winner={winner} />
    </div>
  );
};

export default App;
