import React, { Component } from 'react'
import './App.css'
import Todo from './components/Todo'
import Slider from './components/Slider'

class App extends  Component {
    render() {
        return (
            <div>
                <Slider />
                <Todo />
            </div>
        )
    }
}

export default App

