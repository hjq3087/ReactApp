class AjaxApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl || 'http://localhost:5000/api/todo'
    }

    ajax({ method, url, data, callback }) {
        let client = new XMLHttpRequest()
        client.open(method, url, true)
        client.setRequestHeader('Content-type', 'application/json')
        client.onreadystatechange = checkReadyState
        function checkReadyState() {
            if (client.readyState === 4) {
                callback(client.response)
            }
        }
        if (method === 'POST') {
            data = JSON.stringify(data)
        }
        client.send(data)
    }

    get(path, callback) {
        let r = {
            method: 'GET',
            url: this.baseUrl + path,
            data: '',
            callback: (r) => {
                let data = JSON.parse(r)
                callback(data)
            },
        }
        console.log(r.url)
        this.ajax(r)
    }

    post(path, data, callback) {
        let r = {
            method: 'POST',
            url: this.baseUrl + path,
            data: data,
            callback: (r) => {
                let data = JSON.parse(r)
                callback(data)
            },
        }
        console.log(r.url)
        this.ajax(r)
    }
}

export default AjaxApi