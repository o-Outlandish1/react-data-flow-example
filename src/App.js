import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const STARTER_STATE = {
  todos: [
    {
      text: "Download create-react-app",
      created: new Date(),
      isCompleted: true,
      id: 1
    },
    {
      text: "Learn about one-way data flow in React",
      created: new Date(),
      isCompleted: false,
      id: 2
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = STARTER_STATE;
  }
  render() {
    const actions = {
      updateTodoCompleted: (todoId, isCompleted) => {
        const todosCopy = [].concat(this.state.todos);
        const toModify = todosCopy.find(todo => todo.id === todoId);
        toModify.isCompleted = isCompleted;
        this.setState({ todos: todosCopy });
      }
    };
    return <TodoList todos={this.state.todos} actions={actions} />;
  }
}

export default App;
