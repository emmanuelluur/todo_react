import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
let id = 0;
function Todo(props) {
  return (
    <li>
      <input type="checkbox" />
      <button onClick={() => props.onDelete()}>Delete</button>
      <span> {props.todo.text}</span>
    </li>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    };
  }
  addTodo() {
    const text = prompt("Text TODO");
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: id++,
          text: text,
          checked: false
        }
      ]
    });
  }
  removeTodo(id) {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    });
  }
  render() {
    return (
      <div className="App">
        <h1>TODO app</h1>
        <button onClick={() => this.addTodo()}>New TODO</button>
        <ul>
          <li>
            {this.state.todoList.map(todo => (
              <Todo onDelete={() => this.removeTodo(todo.id)} todo={todo} />
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name={"Emmanuel"} />, rootElement);
