import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toogleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
    
        <TodoItem key={todo.id} removeTodo={removeTodo} toogleTodo={toogleTodo} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
