import ErrorHandler from "./ErrorHandler";


class Helper {


    checkFetchResponse(response) {
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

}

export default Helper