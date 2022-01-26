import React, { Component} from "react";

class Todoformclass extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            input: this.props.edit ? this.props.edit.value : "",
        }
        

    }

    
 

    handleChange = e =>{
        this.setState({
            input : e.target.value
        });
    }

    handleSubmit = e =>{
        e.preventDefault();

        this.props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text : this.state.input
        })
        console.log(this.state.input);
        this.setState({
            input: "",
        })
    }
    render() {
        return (
           

        <form onSubmit={this.handleSubmit} className="todo-form">
        {this.props.edit ? (
        <>
            <input
            placeholder="Update your todo"
            value={this.state.input}
            onChange={this.handleChange}
            name="text"
            className="todo-input edit"
            />
            <button onClick={this.handleSubmit} className="todo-button edit">
            Update
            </button>
        </>
        ) : (
        <>
            <input
            placeholder="Add a todo"
            value={this.state.input}
            onChange={this.handleChange}
            name="text"
            className="todo-input"

            />
            <button onClick={this.handleSubmit} className="todo-button">
            Add todo
            </button>
        </>
        )}
        </form>
        );
    }
}

export default Todoformclass;
