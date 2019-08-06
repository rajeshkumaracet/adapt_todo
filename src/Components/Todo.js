import React, { Component } from "react";
import "../App.css";

class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.task,
    status: this.props.status
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = evt => {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleToggle = evt => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form className="p-3 mb-2" onSubmit={this.handleUpdate}>
          <input
            className="form-control "
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChange}
          />
          <button className="btn btn-warning btn-block mt-2">Save</button>
        </form>
      );
    } else {
      result = (
        <h4
          className={`Todo-task ${this.state.status}`}
          onClick={this.handleToggle}
        >
          {this.props.task}
        </h4>
      );
    }
    return (
      <div className="card output out p-2 mb-1">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className={this.props.completed ? "Todo comp" : "Todo"}>
                {result}
              </div>

              <div className="new">
                <i
                  className="fas fa-pencil-alt fa-2x ml-1"
                  onClick={this.toggleForm}
                />

                <i
                  className="fa fa-trash-alt fa-2x ml-1"
                  onClick={this.handleRemove}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
