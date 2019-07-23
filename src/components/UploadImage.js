import React, { Component } from 'react'
import axios from 'axios'

class UploadImage extends Component {
    state = {
        file: null,
    }

    handleFileSelected = e => {
        console.log(e.target.files[0])
        let file = e.target.files[0]
        this.setState({
            file,
        })
    }

    handleUpload = e => {
        const fd = new FormData()
        fd.append('image', this.state.file, this.state.file.name)
        const fileUploadUrl = '...'
        axios.post(fileUploadUrl, fd)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return (
            <div>
                <input
                    style={{display: 'none'}}
                    type="file"
                    onChange={this.handleFileSelected}
                    ref={fileInput => this.fileInput = fileInput}
                />
                <button onClick={() => this.fileInput.click()}>选择图片</button>
                <button onClick={this.handleUpload}>上传图片</button>
                {/* <img src={this.state}></img> */}
            </div>
        )
    }
}

export default UploadImage