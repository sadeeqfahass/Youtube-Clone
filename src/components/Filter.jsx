import React from "react";

function Filter(props) {
  return (
    <>
      <div className="filter pointer">
        <p>{props.category}</p>
      </div>
    </>
  );
}

export default Filter;
