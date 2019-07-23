import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        const todoList = this.props.todoList
        console.log(todoList)
        return (
            <ul>
                {todoList.map(todoItem => (
                    <li key={todoItem.id}>
                        <TodoItem todoItem={todoItem} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate}/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default TodoList