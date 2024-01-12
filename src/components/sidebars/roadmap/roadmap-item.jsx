import React from "react";

function RoadmapItem(props) {
  const { label, count } = props;
  return (
    <div className="roadmap-item" key={label}>
      <div className="number-span">
        <span>{label}</span>
      </div>
      <span>{count}</span>
    </div>
  );
}

export default RoadmapItem;
