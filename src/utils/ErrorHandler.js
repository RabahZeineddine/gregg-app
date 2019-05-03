import { errorDetail } from '../../src/config'


export default class ErrorHandler {
    constructor(error = {}) {
        if (typeof error == 'number') {
            this.setErrorByStatus(error)
        } else {
            this.setError(error)
        }

    }

    setError(error) {
        console.log('set error')
        console.log(error)
        this.error = true
        this.status = error.status || ''
        this.detail = error.detail || errorDetail(error.status)
    }

    format() {
        return {
            error: this.error,
            status: this.status,
            detail: this.detail
        }
    }

    setErrorByStatus(status) {
        this.error = true
        this.status = status || ''
        this.detail = errorDetail(status)
    }
}