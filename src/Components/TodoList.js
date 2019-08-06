import React, { Component } from "react";
import "../App.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  state = { todos: [] };

  create = newTodo => {
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  resetHandler = () => {
    this.setState({
      todos: ""
    });
  };

  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    console.log(this.state.todos);
    let todos;
    if (this.state.todos.length > 0) {
      todos = this.state.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            status={todo.status}
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
          />
        );
      });
    }

    return (
      <>
        <div className="TodoList">
          <NewTodoForm createTodo={this.create} />
          <div className="text-center">
            {this.state.todos.length > 0 && (
              <div className="card custom-card text-center ">
                <button
                  className="btn custom mt-2 btn-danger "
                  onClick={this.resetHandler}
                >
                  Clear All
                </button>

                <div className="mt-2 status">
                  <i className="fas fa-palette fa-2x comp" />
                  <span>Completed</span>
                  <i className="fas fa-palette fa-2x pen" />
                  <span>Pending</span>
                  <i className="fas fa-palette fa-2x clo" /> <span>Closed</span>
                </div>
              </div>
            )}
            <div className="ren p-2">
              <ul className="todo-list ">{todos}</ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TodoList;
