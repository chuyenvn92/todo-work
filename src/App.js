import React, { Component } from 'react';
import './App.css'
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tasks: [],
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }

  generateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: 'Hoc lap trinh',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Di boi',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Ngu',
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID() {
    return this.s4() + this.s4();
  }

  render() {
    var { tasks } = this.state; // viết cách khác var tasks = this.state.tasks
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <TaskForm />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus"></span>Thêm Công Việc
                </button>
            <button type="button" className="btn btn-danger" onClick={this.generateData}>Genarate data
                </button>
            <Control />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;