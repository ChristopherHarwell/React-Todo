import React from "react";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";
import TodoForm from "./components/TodoForm";

const todoData = [
  {
    task: "Task 1",
    id: uuid(),
    completed: false,
  },
  {
    task: "Task 2",
    id: uuid(),
    completed: false,
  },
  {
    task: "Task 3",
    id: uuid(),
    completed: false,
  },
  {
    task: "Task 4",
    id: uuid(),
    completed: false,
  },
  {
    task: "Task 5",
    id: uuid(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change
  // handlers you need to work with your state

  constructor() {
    super();
    this.state = { todoData };
  }

  toggleTodo = (itemId) => {
    console.log("CH: App: toggletTodo: id: ", itemId);

    this.setState({
      todoData: this.state.todoData.map((todos) => {
        if (todos.id === itemId) {
          return {
            ...todos,
            completed: !todos.completed,
          };
        }
        console.log(todos);
        return todos;
      }),
    });
  };

  addTodo = todoItem => {
    this.setState({
      todoData: [...this.state.todoData, {task: todoItem, completed: false, id: uuid() }]
    })
  }

  render() {
    /** All of your `handler` functions should live here on
     * `<App />`. */

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todo={this.state.todoData} 
        toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
