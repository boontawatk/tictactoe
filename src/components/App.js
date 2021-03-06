import React, { useEffect, useState } from "react";
import Board from "./Board";
import Menu from "./Menu";

const App = () => {
  //get winner & current team data from board-> to Menu
  const [team, setTeam] = useState("false");
  const [winner, setWinner] = useState(null);
  const [count, updateCount] = useState(0);
  const currentTeam = team ? "X" : "O";
  useEffect(() => {
    if (count === 0) {
      setWinner(null);
      setTeam("false");
    }
  }, [count]);
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <Board
        team={team}
        setTeam={setTeam}
        setWinner={setWinner}
        count={count}
        updateCount={updateCount}
        winner={winner}
      />
      <Menu
        team={currentTeam}
        winner={winner}
        count={count}
        updateCount={updateCount}
      />
    </div>
  );
};

export default App;
