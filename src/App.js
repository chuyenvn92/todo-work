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
      isDisplayForm: false,
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

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID() {
    return this.s4() + this.s4();
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }
  onSubmit = (data) => {
    var tasks = this.state.tasks;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  render() {
    var elmTaskForm = this.state.isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}
      onSubmit={this.onSubmit} /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={this.state.isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elmTaskForm}
          </div>
          <div className={this.state.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary"
              onClick={() => this.onToggleForm()}>
              <span className="fa fa-plus"></span>Thêm Công Việc
                </button>
            <Control />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={this.state.tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;