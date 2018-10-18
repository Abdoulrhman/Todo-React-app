import React, { Component } from 'react';
import Todo from "./compnants/TodoItem";
import TodoText from "./compnants/TodoText";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
        tasks:JSON.parse(localStorage.getItem('tasks'))
    }
}

handleAdd = () => {
  var title = this.refs.title.value;
 if(localStorage.getItem('tasks') == null){
     var tasks = [];
     tasks.push(title);
     localStorage.setItem('tasks',JSON.stringify(tasks));


 }else{
     var tasks = JSON.parse(localStorage.getItem('tasks'));
     tasks.push(title);
     localStorage.setItem('tasks',JSON.stringify(tasks));

  this.setState({
     tasks: JSON.parse(localStorage.getItem('tasks'))
  });


 }


}

handleDelete = (e) => {

  var index = e.target.getAttribute('data-key');
  var list = JSON.parse(localStorage.getItem('tasks'));
  list.splice(index,1);
  this.setState({
      tasks:list

  });

  localStorage.setItem('tasks',JSON.stringify(list));
}

  render() {
    return (
            <React.Fragment>
          
            <h1>My todo</h1>
            <input type="text" placeholder="Add Task" ref="title"/>
            <input type="button" value="ADD" onClick={this.handleAdd}/>
            <br/>
            <br/>

            <Todo
            onHandleDelete={this.handleDelete}
            tasks={this.state.tasks}
             />
            </React.Fragment>
    );
  }
}

export default App;
