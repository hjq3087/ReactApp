import React, { Component } from 'react'
import TodoApi from "../api/TodoApi"

class TodoForm extends Component {
    constructor(props) {
        super(props)
        let todoList = this.props.todoList
        this.state = {
            todoList,
            text: ''
        }
        this.api = new TodoApi()
    }

    handleChange = (e) => {
        let self = e.target
        this.setState({
            text: self.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.text.length === 0) {
            return
        }
        let task = this.state.text
        let data = {
            task,
        }
        this.api.add(data, (res) => {
            console.log(res)
            let latestItem = res[res.length - 1]
            this.props.handleAdd(latestItem)
            this.setState(
                {
                    todoList: res,
                    text: ''
                }
            )
        })
    }

    render() {
        let todoList = this.props.todoList
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                    输入事项
                </label>
                <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <button className='todo-btn'>
                    添加第{todoList.length + 1}个未办事项
                </button>
            </form>
        )
    }
}

export default TodoForm