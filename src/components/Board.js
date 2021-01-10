import React from "react";
import Marker from "./Marker";

const Board = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" />
        </div>
      </div>
    </div>
  );
};

export default Board;
