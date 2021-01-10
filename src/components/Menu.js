import React from "react";

const Menu = ({ team, winner }) => {
  return (
    <div>
      <div className="p-3">Current Player: {team}</div>
      <div className="text-center">
        <div className="alert alert-success text-center" role="alert">
          {winner} is the Winner! Press Restart to play again
        </div>
        <button type="button" className="btn btn-secondary">
          Restart
        </button>
      </div>
    </div>
  );
};

export default Menu;
