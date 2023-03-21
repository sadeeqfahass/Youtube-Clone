import React from "react";

function Filter(props) {
  return (
    <>
      <div className="filter">
        <p>{props.category}</p>
      </div>
    </>
  );
}

export default Filter;
