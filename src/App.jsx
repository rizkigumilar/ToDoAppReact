import React from "react";
import "./App.css";
import Header from './components/header'
import TodoList from './components/toDoList'
import SubmitForm from './components/submitForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['task 1', 'task 2', 'task 3', 'task 4'],
    };
  }

handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
}

handleSubmit = task => {
  this.setState({tasks: [...this.state.tasks, task]});
}

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length}/>
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
