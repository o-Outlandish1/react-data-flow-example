
import React, { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props)
  {
    super();
    this.state = {hideCompleted : false}
    this.onHideToggle = this.onHideToggle.bind(this);  
    // this.isSorted = this.isSorted.bind(this);  

  }

onHideToggle()
{
 let newHideCompleted = !this.state.hideCompleted;
  this.setState({hideCompleted: newHideCompleted});
}

sortByDate()
{
  this.setState({isSorted: true})
}
  
  render() {
    let { todos, actions } = this.props;
  if(this.state.hideCompleted) {todos = todos.filter(todo => !todo.isCompleted)
  }
    // if(this.state.isSorted)
    // {todos = todos.sort(todo => )} 
  

    return (
      <div>
        <h3>TODOs ({todos.length})</h3>
          <label>
          <input type="checkbox" 
            checked={this.state.hideCompleted} 
            onChange={this.onHideToggle} />
          Hide Completed ToDos
        </label>
        <button 
        onClick={this.sortByDate}>
          Sort By Date
        </button>
      
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodoCompleted={actions.updateTodoCompleted}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
