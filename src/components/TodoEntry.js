import React, {Component} from 'react'
import todoStore from '../stores/TodoStore'

class TodoEntry extends Component{
  state={
    value:""
  };
handleKeyDwon = event =>{
  if(event.keyCode !== 13){
  return;
       }
    event.preventDefault()
     todoStore.addTodo(this.state.value)
     this.setState({
       value:''
     })
}

  
    render(){
        return(
            <header className="header">
              <h1>TODO</h1>
               <input
                 value={this.state.value}
                 onChange={event => this.setState({value: event.target.value})}
                 onKeyDown={
                   event => this.handleKeyDwon(event)
                 } 
                 type="text"
                  className="new-todo"
                  placeholder="What needs to be done?" 
                />
      </header>
        )
    }
}
export default TodoEntry