import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

/** `<TodoList />` receives your Todos array and iterates over
 *  the list generating a new `<Todo />` for each element in 
 *  the array. */

 /** Once a todo is submitted, the Todo List should re-render
  *  and show the added todo. */

const TodoList = props => { 
        return (
            <div>
                {props.todo.map(todo => (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        toggleTodo={props.toggleTodo}
                    />
                ))}
            </div>
        );
    };

    export default TodoList;