import React from "react";

const Menu = ({ team, winner, count, updateCount }) => {
  const showResult = () => {
    if (winner) {
      return (
        <div className="alert alert-success text-center m-3" role="alert">
          {winner} is the Winner! Press Restart to play again
        </div>
      );
    } else if (count === 9) {
      return (
        <div className="alert alert-warning text-center m-3" role="alert">
          Draw! Press Restart to play again
        </div>
      );
    }
    return "";
  };

  const reset = () => {
    updateCount(0);
  };
  // if (count === 9)
  return (
    <div>
      <div className="p-3">Current Player: {team}</div>
      <div className="text-center">
        <button onClick={reset} type="button" className="btn btn-secondary">
          Restart
        </button>
        {showResult()}
      </div>
    </div>
  );
};

export default Menu;
