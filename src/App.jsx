import { useState, useEffect } from "react";
import TodoCard from "./components/TodoCard";
import TodoList from "./components/TodoList";
import TodoInput from "./components/Todoinput";

function App() {
  let [todos, setTodos] = useState([]);
  let [todoValue, setTodoValue] = useState("");

  function persist(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persist(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return index != todoIndex;
    });
    persist(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    const editedValue = todos[index];
    setTodoValue(editedValue);
    handleDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    
    if (!localTodos) {
      return
    }
    
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
      />
    </>
  );
}

export default App;
