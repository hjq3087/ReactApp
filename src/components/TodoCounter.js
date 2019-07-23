import React, {Component} from 'react'

class TodoCounter extends Component {
    render() {
        let todoList = this.props.todoList
        let total = todoList.length
        let completedTodoItems = todoList.filter(t => t.done).length
        let unCompletedTodoItems = todoList.filter(t => !t.done).length
        return (
            <div className="todo-counter">
                <div className="todo-table">
                    <div className="todo-row">
                        <span className="cell">总计</span>
                        <span className="cell">完成</span>
                        <span className="cell">未完成</span>
                    </div>
                    <div className="todo-row">
                        <span className="cell">{total}</span>
                        <span className="cell">{completedTodoItems}</span>
                        <span className="cell">{unCompletedTodoItems}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoCounter
