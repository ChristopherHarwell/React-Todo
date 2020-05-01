import React from "react";

/** `<Todo />` is a component that takes in the `todo`
 *  data and displays the task to the screen. */

const Todo = (props) => {
  return (
    <div
      className={`task${props.todo.completed ? " completed" : ""}`}
      onClick={(e) => {
        // the data is being passed as props
        // and called 'todo' from App.js to TodoList
        // so and from TodoList.js to Todo.js
        // that is why we call props.todo.id
        props.toggleTodo(props.todo.id);
      }}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;