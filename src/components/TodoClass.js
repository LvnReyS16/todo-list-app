import React, { Component } from 'react';
import { AiTwotoneEdit,AiFillDelete } from 'react-icons/ai';
import Todoformclass from './TodoFormClass';

class Todoclass extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: null,
            value : ''
        }
    }

    submitUpdate = value =>{
        
        this.props.updateTodo(this.state.id, value)

        this.setState({
            id: null,
            value:''
        });
       
    };
    


    render()
     {
        if(this.state.id){
            return <Todoformclass edit={this.state} onSubmit={this.submitUpdate}/>
        }else{
            return this.props.todos?.map((todo, index) => (
                <div className={todo.isComplete ? 'todo-row complete': 'todo-row'} key={index}>
                    <div key={todo.id} onClick={()=> this.props.completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div className="icons">
                        <AiFillDelete onClick={() => this.props.removeTodo(todo.id)} className="delete-icon"/>
                        <AiTwotoneEdit onClick={() => this.setState({id : todo.id, value : todo.text})} className="edit-icon"/>
                    </div>
                </div>
            ))
        }
        
      
    }
}

export default Todoclass;
