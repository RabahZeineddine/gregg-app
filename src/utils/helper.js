import ErrorHandler from "./ErrorHandler";


class Helper {


    static checkFetchResponse(response) {
        console.log(response)
        if (!response.ok) {
            if (response.json) {
                return response.json().then((err) => {
                    return Promise.reject(new ErrorHandler(err).format())
                })
            }
            return Promise.reject(new ErrorHandler(response.status || 500).format())
        }
        return response.json().then(result => Promise.resolve(result))
    }

    static stringToDate(strData) {
        return new Date(strData.split('-').reverse().join('-'))
    }

}

export default Helper