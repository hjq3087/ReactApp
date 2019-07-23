import React, { Component } from 'react'
import image0 from '../imgs/zelda169.jpg'
import image1 from '../imgs/pokemon169.jpg'
import image2 from '../imgs/godofwar169.jpg'
import image3 from '../imgs/monsterhunter169.jpg'
import Indicator from './Indicator'

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                {
                    id: 0,
                    url: image0,
                    active: true,
                    title: '塞尔达 荒野之息',
                },
                {
                    id: 1,
                    url: image1,
                    active: false,
                    title: '精灵宝可梦',
                },
                {
                    id: 2,
                    url: image2,
                    active: false,
                    title: '战神 4',
                },
                {
                    id: 3,
                    url: image3,
                    active: false,
                    title: '怪物猎人 世界',
                },
            ]
        }
    }

    showAtIndex = (index) => {
        let images = this.state.images
        images.map(image => image.active = false)
        let indexToShow = images.findIndex(image => image.id === index)
        images[indexToShow].active = true
        this.setState({
            images: images
        })
    }

    nextId = (id, offset) => {
        let length = this.state.images.length
        let newId = (id + offset + length) % length
        return newId
    }

    handleNext = (id) => {
        let index = this.nextId(id, 1)
        this.showAtIndex(index)
    }

    handlePrev = (id) => {
        let index = this.nextId(id, -1)
        this.showAtIndex(index)
    }

    showAtIndicator = (event) => {
        let self = event.target
        let index = parseInt(self.innerHTML, 10)
        self.classList.add('indicator-btn-cur')
        this.showAtIndex(index - 1)
    }

    playNext = () => {
        let images = this.state.images
        let currentId = images.filter(image => image.active === true)[0].id
        let nextIndex = this.nextId(currentId, 1)
        this.showAtIndex(nextIndex)
    }

    componentDidMount() {
        setInterval(() => {
            this.playNext()
        }, 2000)
    }

    render() {
        let images = this.state.images
        let imagesToShow = images.filter(image => image.active === true)
        let image = imagesToShow[0]

        return (
            <div className="slide-container">
                <img className="slide-img" src={image.url} alt={image.title}/>
                <span className="slide-title">{image.title}</span>
                <button className="slide-btn slide-btn-left" onClick={() => this.handlePrev(image.id)}>&lt;</button>
                <button className="slide-btn slide-btn-right" onClick={() => this.handleNext(image.id)}>&gt;</button>
                <div className="indicators">
                    {
                        images.map(image => (
                            <Indicator
                                key = {image.id}
                                image = {image}
                                showAtIndicator = {this.showAtIndicator}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Slider