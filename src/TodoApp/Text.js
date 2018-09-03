import React, { Component  } from "react";
import './Text.css';

var initialTodo = {
    title: '',
    isCompleted: false
};

class Text extends Component {
    constructor(props){
        super(props);

        this.state = {
            value:'',
            todos:[],
            todo: {...initialTodo}
        }
    }

    handleValue = (e) => {
        let { todo } = this.state;
        todo['title'] = e.target.value;

        this.setState({
            todo
        });
    }

    addTodo=(e)=>{
        e.preventDefault();

        let { todo, todos } = this.state;
        if(todo.title) {
            todos.push(todo);
            
            this.setState({
                todos,
                todo: {...initialTodo}
            });
        }
        
    }

    toggleComplete=(key)=>{
       let { todos } = this.state;
       todos[key]['isCompleted'] = !todos[key].isCompleted;

       this.setState({ todos });
    }

    removeTodo=(key)=>{
        let { todos } = this.state;
        todos.splice(key, 1);

        this.setState({ todos });
    }
    
    render(){
        return(
            <div className="container">
                <div className = "row">
                    <form onSubmit={this.addTodo}>
                        <input 
                            type= "text" 
                            className="style" 
                            placeholder="Enter Todo !" 
                            onChange={this.handleValue} 
                            value={this.state.todo.title} 
                        />
                    </form>
                </div>
                <div className="row">
                    {this.state.todos.length?this.state.todos.map((todo,i)=>
                                <div key={i}>
                                <div  type="text" className="dynamic" key={i}>
                                    {todo.isCompleted?<strike>{todo.title}</strike>:<span>{todo.title}</span>}
                                    <span 
                                        className="close" 
                                        onClick={this.removeTodo.bind(this,i)}
                                    >X</span>
                                    <div className="button" 
                                    onClick={this.toggleComplete.bind(this, i)}>{todo.isCompleted?'Mark As Incomplete':'Mark As Complete'}</div>
                                </div>
                                </div>
                            ):
                            <p>No Todo was found...</p>}
                </div>
            </div>
        );
    }
}

export default Text;