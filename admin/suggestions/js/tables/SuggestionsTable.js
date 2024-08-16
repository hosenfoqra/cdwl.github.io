import {extractMongoObjectId} from '../../../../assets/js/utils/mongo.js';

export default class SuggestionsTable {

    viewBtnCallback = undefined
    deleteBtnCallback = undefined

    /**
     *
     * @param _tableId {string}
     */
    constructor(_tableId=undefined) {
        this.tableId = _tableId

        // Check passed table id
        if (this.tableId === undefined) {
            throw "[Table Util] Table ID is required!"
        }

        // Check if table found
        if (!this.doesExists()) {
            throw `[Table Util] No table has found with id ${this.tableId}`
        }

        this.viewBtnCallback = undefined
        this.deleteBtnCallback = undefined
    }

    /**
     * show no results row
     * @return {void}
     */
    showNoResultsRow() {
        // clear table rows
        this.clearRows()

        // show row
        const tableTbody = document.querySelector(`#${this.tableId} tbody`)

        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.setAttribute('colspan', '100%')
        td.innerText = 'No Data Found!'
        tr.append(td)

        tableTbody.append(tr)
    }

    /**
     * add row into table
     * @param _rowInfo {object}
     * @return {void}
     *
     * example of _rowInfo:<br>
     * {<br>
     *     "name": "",<br>
     *     "logo": "",<br>
     * }<br>
     */
    rowAdd(_rowInfo) {
        const row = this.#buildRow(_rowInfo)

        // add row into table
        document.querySelector(`#${this.tableId} tbody`).appendChild(row)
    }

    /**
     * receive row info and build a row for it to be inserted into table
     * @param _rowInfo
     */
    #buildRow(_rowInfo) {
        const tr = document.createElement('tr')
        tr.id = `row-${extractMongoObjectId(_rowInfo._id)}`

        // index cell
        const cell_id = document.createElement('th')
        cell_id.innerText = this.rowsCount() + 1
        cell_id.setAttribute('scope', 'row')
        tr.appendChild(cell_id)

        const cell_category = document.createElement('td')
        cell_category.innerText = _rowInfo.category
        tr.appendChild(cell_category)

        const cell_date = document.createElement('td')
        cell_date.innerText = _rowInfo.date
        tr.appendChild(cell_date)

        // options cell
        const cell_options = document.createElement('td')
        const button_view = document.createElement('button')
        button_view.classList.add('btn', 'btn-primary', 'text-white', 'rounded', 'fa', 'fa-eye')
        button_view.style.cursor = 'pointer'
        button_view.innerHTML = ' View'

        // Set click event if enabled
        if (this.viewBtnCallback !== undefined) {
            button_view.addEventListener('click', () => {
                this.viewBtnCallback(_rowInfo)
            })
        }
        cell_options.append(button_view)

        const button_delete = document.createElement('button')
        button_delete.classList.add('btn', 'btn-danger', 'text-white', 'rounded', 'fa', 'fa-trash', 'mx-2')
        button_delete.style.cursor = 'pointer'
        button_delete.innerHTML = ' Delete'

        // Set click event if enabled
        if (this.viewBtnCallback !== undefined) {
            button_delete.addEventListener('click', () => {
                this.deleteBtnCallback(_rowInfo)
            })
        }
        cell_options.append(button_delete)


        tr.appendChild(cell_options)

        return tr
    }

    /**
     * clear table rows
     * @return {void}
     */
    clearRows() {
        document.querySelector(`#${this.tableId} tbody`).innerHTML = ''
    }

    /**
     * get the number of table rows
     * @return {number}
     */
    rowsCount() {
        const rows = document.querySelectorAll(`#${this.tableId} tbody tr`)
        return rows.length
    }

    /**
     * check if table exists
     * @return {boolean}
     */
    doesExists() {
        const element =  document.querySelector(`table#${this.tableId}`);
        return typeof (element) != 'undefined' && element != null;
    }

    /**
     * Delete row from table by id
     * @param _rowId {string} E.g. 652c401eda1cbf67d05c156c
     */
    deleteRowById(_rowId) {
        document.querySelector(`table#${this.tableId} tr#row-${_rowId}`).remove()
    }
}
