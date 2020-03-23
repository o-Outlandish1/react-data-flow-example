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
        // Keep it all immutable ftw (not required for React to work)
        // (my Twitter handle is @immutabill for a reason)
        const { todos } = this.state;
        const idx = todos.findIndex(todo => todo.id === todoId);
        const todo = todos[idx];
        const updatedTodo = {
          ...todo,
          isCompleted
        };
        const updatedTodos = [
          ...todos.slice(0, idx),
          updatedTodo,
          ...todos.slice(idx + 1)
        ];
        // Calling .setState **is required** for React to know it needs to update
        this.setState({ todos: updatedTodos });
      }
    };
    return <TodoList todos={this.state.todos} actions={actions} />;
  }
}

export default App;
