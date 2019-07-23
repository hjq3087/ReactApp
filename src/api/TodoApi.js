import AjaxApi from './ajaxapi'

class TodoApi extends AjaxApi {
    add(data, callback) {
        let path = '/add'
        this.post(path, data, callback)
    }

    delete(id, callback) {
        let path = `/delete/${id}`
        this.get(path, callback)
    }

    update(id, data, callback) {
        let path = `/update/${id}`
        this.post(path, data, callback)
    }

    all(callback) {
        let path = '/all'
        this.get(path, callback)
    }

    one(id, callback) {
        let path = `/${id}`
        this.get(path, callback)
    }
}

export default TodoApi