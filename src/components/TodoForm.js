import React, { Component } from "react";
import { v4 as uuid } from "uuid";

/** `<TodoForm>` will hold your input field and
 *   your `Add Todo` and `Clear Completed` buttons. */

/** Your input field should take in user input, and
 *  allow a user to press `Enter` or click on the
 * `Submit Button` to add a todo to your list. */

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  handleChanges = (e) => {
    //update value of state with each key pressed
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.todo);
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          onChange={this.handleChanges}
          value={this.state.todo}
        />
        <button>New Todo</button>
      </form>
    );
  }
}

export default TodoForm;
