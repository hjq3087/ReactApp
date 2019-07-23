import React, {Component} from 'react'
import TodoApi from '../api/TodoApi'
import TodoList from './TodoList'
import TodoCounter from './TodoCounter'
import TodoForm from './TodoForm'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            todoList: [],
            text: '',
        }
    }

    componentDidMount() {
        this.api.all(res => {
            this.setState({
                todoList: res,
            })
        })
    }

    handleAdd = (todoItem) => {
        let { todoList } = this.state
        todoList.push(todoItem)
        this.setState({
            todoList,
        })
    }

    handleUpdate = (todoItem) => {
        let { todoList } = this.state
        let i = todoList.findIndex(t => t.id === todoItem.id)
        todoList[i] = todoItem
        this.setState({
            todoList,
        })
    }

    handleDelete = (id) => {
        let todoList = this.state.todoList
        let index = todoList.findIndex(e => e.id === id)
        todoList.splice(index, 1)
        this.setState({
            todoList,
        })
    }


    render() {
        const todoList = this.state.todoList
        return (
            <React.Fragment>
                <TodoList todoList={todoList} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                <TodoForm todoList={todoList}  handleAdd={this.handleAdd} />
                <TodoCounter todoList={todoList} />
            </React.Fragment>
        )
    }
}

export default Todo