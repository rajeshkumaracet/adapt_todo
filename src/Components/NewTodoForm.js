import React, { Component } from "react";
import uuid from "uuid/v4";
import "../App.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  };
  render() {
    return (
      <div className="card main_card d-flex justify-content-center align-center m-5 bg-white">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">TaskName</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Eg: Go Lion King Movie"
                  id="task"
                  name="task"
                  value={this.state.task}
                  onChange={this.handleChange}
                />
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
