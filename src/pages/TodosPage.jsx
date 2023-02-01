import React, { useState } from "react";

const TodosPage = () => {
    const [todos, setTodos] = useState([]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const { todo } = ev.target.elements;
        setTodos([...todos, todo.value]);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" />
            <button type="submit">Add</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodosPage;