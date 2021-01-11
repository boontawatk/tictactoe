import React from "react";

const Menu = ({ team, winner }) => {
  const showWinner = () => {
    if (winner)
      return (
        <div className="alert alert-success text-center m-3" role="alert">
          {winner} is the Winner! Press Restart to play again
        </div>
      );
  };

  return (
    <div>
      <div className="p-3">Current Player: {team}</div>
      <div className="text-center">
        <button type="button" className="btn btn-secondary">
          Restart
        </button>
        {winner ? showWinner() : ""}
      </div>
    </div>
  );
};

export default Menu;
