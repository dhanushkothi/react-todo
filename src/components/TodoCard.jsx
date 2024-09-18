import React from "react";

export default function TodoCard(props) {
  let { children, handleDeleteTodos, index, handleEditTodos } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <button onClick={() => {
          handleEditTodos(index)
        }}> <i className="fa-solid fa-pen-to-square"></i> </button>
        <button onClick={() => {
          handleDeleteTodos(index)
        }}> <i className="fa-sharp fa-solid fa-trash"></i> </button>
      </div>
    </li>
  );
}
