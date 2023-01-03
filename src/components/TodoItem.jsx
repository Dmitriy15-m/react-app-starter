import React from "react";

const TodoItem = ({ id, text, completed, removeTodo, toogleTodo }) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toogleTodo(id)}
      />
      <span style={{ margin: 10 }}>{text}</span>
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => removeTodo(id)}
      >
        X
      </span>
    </li>
  );
};

export default TodoItem;
