
class UrlParams {

    // store url params on constructor
    #urlParams = {}

    constructor() {
        // extract url params
        const queryString = window.location.search;
        // store url params
        this.#urlParams = new URLSearchParams(queryString)
    }

    /**
     * get url param by key
     * @param _key {string} E.g. ref
     * @return {undefined|string}
     */
    getParamByKey(_key) {
        const param = this.#urlParams.get(_key)
        if (param) return param
        else return undefined
    }
}

export default new UrlParams()
