import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header_components";
import TodoList from "./Components/TodoList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
      </div>
    );
  }
}
export default App;
