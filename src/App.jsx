import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => (todo.id !== id ? true : false)));
  };

  const toogleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      })
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputField text={text} setText={setText} addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} toogleTodo={toogleTodo} />
    </div>
  );
};

export default App;
