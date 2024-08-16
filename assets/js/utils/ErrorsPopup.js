
export default class ErrorsPopup {
    constructor() {}

    singleErrorSettings = {
        showConfirmBtn: false,
        allowOutsideClick: false
    }

    // settings to be used in request error popup
    requestErrorSettings = {
        showConfirmBtn: false,
        allowOutsideClick: false,
        showFirstErrorOnly: false,
        showErrorVariable: false,
        confirmButtonClickCallback: undefined
    }

    /**
     * show errors popup
     * @param _errorTitle {string} E.g. Error
     * @param _errorDescription {string} E.g. Data not found
     */
    showSingleError(_errorTitle, _errorDescription) {
        Swal.fire({
            icon: 'error',
            title: _errorTitle,
            html: `
                ${_errorDescription}
            `,
            backdrop: 'rgba(0,0,0,0.5)',
            allowOutsideClick: this.singleErrorSettings.allowOutsideClick,
            showConfirmButton: this.singleErrorSettings.showConfirmBtn,
            confirmButtonText: 'Close',
        });
    }

    /**
     * show request errors popup
     * @param _requestErrors {object} E.g.
     * [
     *     {
     *         "errorText": "Controller doesnt exist",
     *         "errorCode": "123ABC"
     *     }
     * ]
     */
    showRequestErrors(_requestErrors) {
        const html = document.createElement('div')

        // iterate on request errors
        for (let i = 0; i < _requestErrors.length; i++) {
            const requestError = _requestErrors[i];
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('mb-3', 'pt-2')
            errorDiv.style = 'border: 1px solid black; border-radius: 25px;'

            errorDiv.innerHTML = `
                <h6 style="font-weight: bolder;">${requestError['errorText']}</h6>
                <h6 class="text-muted">Error code: ${requestError['errorCode']}</h6>
                <h6 class="text-muted">Parameter: ${requestError.errorVariable}</h6>
                <h6 class="text-muted">Trace ID: ${requestError.errorTraceId}</h6>
            `;
            html.appendChild(errorDiv);

            // stop if chose to show first error only
            if (this.requestErrorSettings.showFirstErrorOnly) {
                break;
            }
        }

        Swal.fire({
            icon: 'error',
            title: 'Error',
            html: `
                <div style="background-color: #fff; text-align: center;">
                    ${html.innerHTML}
                </div>`
            ,
            backdrop: 'rgba(0,0,0, 0.5)',
            allowOutsideClick: this.requestErrorSettings.allowOutsideClick,
            showConfirmButton: this.requestErrorSettings.showConfirmBtn,
            confirmButtonText: 'Close',
        }).then((result) => {
            if (result.isConfirmed) {
                if (this.requestErrorSettings.confirmButtonClickCallback !== undefined) {
                    this.requestErrorSettings.confirmButtonClickCallback()
                }
            }
        })
    }

    closeErrorsPopup() {
        Swal.close()
    }
}
