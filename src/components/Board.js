import React, { useEffect, useState } from "react";
import Marker from "./Marker";

const Board = ({ team, setTeam, setWinner, count, updateCount }) => {
  const winCondition = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const [table, updateTable] = useState([]);
  const teamSwitch = () => {
    setTeam(!team);
  };

  const addTable = (num, team) => {
    const updatedTable = [...table];
    updatedTable[num] = team;
    updateTable(updatedTable);
  };

  //check for winner, if there is a winner, return who's win
  const checkWin = () => {
    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      if (table[a] && table[a] === table[b] && table[a] === table[c]) {
        return table[a];
      }
    }
  };

  const winner = checkWin();

  useEffect(() => {
    if (winner) setWinner(winner);
  }, [winner]);
  const renderRow = (...arg) => {
    let Row = [];
    for (let i = 0; i < arg.length; i++) {
      Row.push(
        <div key={arg[i]} className="col-sm p-0">
          <Marker
            count={count}
            updateCount={updateCount}
            winner={winner}
            num={arg[i]}
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
      );
    }
    return (
      <div key={arg[0]} className="row">
        {Row}
      </div>
    );
  };
  return (
    <div>
      {renderRow(1, 2, 3)}
      {renderRow(4, 5, 6)}
      {renderRow(7, 8, 9)}
    </div>
  );
};

export default Board;
