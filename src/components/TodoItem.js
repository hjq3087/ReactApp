import React, { Component } from 'react'
import TodoApi from "../api/TodoApi"

class TodoItem extends Component {
    constructor(props) {
        super(props)
        let { task, id, done } = this.props.todoItem
        this.state = {
            editing: false,
            text: task,
            todoItem: {
                task,
                id,
                done,
            },
        }
        this.api = new TodoApi()
    }

    handleChange = (e) => {
        let self = e.target
        this.setState({
            text: self.value,
        })
    }

    handleEdit = (e) => {
        this.setState({
            editing: true,
        })
    }

    handleDelete = (e) => {
        let { id } = this.state.todoItem
        this.api.delete(id, (res) => {
            console.log(res)
            this.props.handleDelete(id)
        })
    }

    handleSubmit = (e) => {
        let { id } = this.state.todoItem
        let text = this.state.text
        let data = {
            task: text
        }
        this.api.update(id, data, (res) => {
            let todoItem = res
            this.setState({
                todoItem,
                editing: false,
            })
        })
    }

    handleCancel = (e) => {
        this.setState({
            editing: false,
        })
    }


    toggleComplete = (e) => {
        let { id, done } = this.state.todoItem
        let data = {
            done: !done,
        }
        this.api.update(id, data, (res) => {
            this.props.handleUpdate(res)
            this.setState({
                todoItem: res,
            })
        })
    }

    render() {
        let {task, done} = this.state.todoItem
        let todoOnEditingTemplate = (
            <React.Fragment>
                <button className='todo-btn' onClick={this.handleSubmit}>提交</button>
                <button className='todo-btn' onClick={this.handleCancel}>取消</button>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
            </React.Fragment>
        )
        let text = done ? '取消完成' : '标记为完成'
        let todoTemplate = (
            <React.Fragment>
                <span>{task}</span>
                <button className='todo-btn' onClick={this.handleEdit}>编辑</button>
                <button className='todo-btn' onClick={this.handleDelete}>删除</button>
                <button className='todo-btn' onClick={this.toggleComplete}>{text}</button>
            </React.Fragment>
        )
        let classList = done ? 'todo-complete' : ''
        let todo = this.state.editing ? todoOnEditingTemplate : todoTemplate
        return (
            <div className={`todo-cell ${classList}`}>
                {todo}
            </div>

        )
    }
}

export default TodoItem