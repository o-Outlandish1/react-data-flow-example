import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        },
        {
          text: "Learn Zoom breakout rooms",
          created: new Date(),
          isCompleted: false,
          id: 3
        }
      ]
    };
  }
  render() {
    const actions = {
      updateTodoCompleted: (todoId, isCompleted) => {
        const idx = this.state.todos.findIndex(todo => todoId === todo.id);
        this.state.todos[idx].isCompleted = isCompleted;
        this.setState({});
      }
    };
    return <TodoList todos={this.state.todos} actions={actions} />;
  }
}

export default App;
