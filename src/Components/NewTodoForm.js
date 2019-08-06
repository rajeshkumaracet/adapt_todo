import React, { Component } from "react";
import uuid from "uuid/v4";
import "../App.css";

class NewTodoForm extends Component {
  state = { task: "", status: "select" };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), comp: false });
    this.setState({ task: "", status: "select" });
  };

  handleOption = evt => {
    this.setState({
      status: evt.target.value
    });
  };

  render() {
    return (
      <div className="card main_card d-flex justify-content-center align-center m-5 bg-white">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">
                  <b>TaskName:</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Eg: Go Lion King Movie"
                  id="task"
                  name="task"
                  value={this.state.task}
                  onChange={this.handleChange}
                  required
                />
                <div className="form-group mt-3">
                  <label htmlFor="status">
                    <b>Choose Status:</b>
                  </label>
                  <select
                    className="form-control"
                    onChange={this.handleOption}
                    value={this.state.status}
                    required
                  >
                    <option value="select" disabled>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <button className="btn-block btn-success mt-2">Add Todo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewTodoForm;
