import React from "react";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";
import TodoForm from "./components/TodoForm";
import './components/Todo.css';

const originalTodoData = [
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
    this.state = { todoData: originalTodoData };
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
  
  clearTodo = () => {
    console.log('CH: App.js: App: clearTodo');
    this.setState({

      // filter out the tasks and return true if the 
      // task is completed and false otherwise
      todoData: this.state.todoData.filter( task => {
        return !task.completed;
      })
    })
  }

  render() {
    /** All of your `handler` functions should live here on
     * `<App />`. */

    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todo={this.state.todoData} 
        toggleTodo={this.toggleTodo}
        clearTodo={this.clearTodo} />
      </div>
    );
  }
}

export default App;
