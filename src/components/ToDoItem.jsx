import React, { useState } from "react";

function ToDoItem(props) {
  const [hoverState, setHoverState] = useState(false);
  function hoverStateHandler() {
    setHoverState((prev) => {
      return !prev;
    });
  }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
      onMouseOver={hoverStateHandler}
      onMouseLeave={hoverStateHandler}
    >
      <li style={{ textDecoration: hoverState && "line-through" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
