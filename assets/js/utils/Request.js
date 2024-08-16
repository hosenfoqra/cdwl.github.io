
import { API } from '../constants/API.js';

class Request {

    constructor() {}

    /**
     * send request
     * @param _type {string} - POST|GET
     * @param _data {object}
     */
    send(_type, _data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: API.ENDPOINT,
                method: _type??'GET',
                data: _data,
                success: function (res) {
                    const response = JSON.parse(res);
                    resolve(response)
                },
                error: (e) => {
                    const requestStatue = e.status; // 500

                    /*
                        E.g.
                        {
                            "errors": [
                                {
                                    "msg": "Unexpected error, Please contact support team",
                                    "errorCode": "123"
                                }
                            ]
                        }
                     */
                    const requestError = JSON.parse(e.responseText).errors;

                    if (requestError.length) {
                        // show error popup
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            html: `
                                <span>${requestError[0]['message']}</span>
                                <span class="text-danger" style="white-space: pre;">${requestError[0]['errorCode']}</span>
                            `,
                            showConfirmButton: true,
                            confirmButtonText: 'Close',
                        });
                    }

                    reject(e);
                },
            });
        });
    }
}

export default new Request()
