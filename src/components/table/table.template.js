const CODES = {
    A: 65,
    Z: 90
}

function createCell() {
    return `
    <div class="cell" contenteditable>
    A1
    </div>
    `
}

function toCell(col) {
    return `
    <div class="cell" contenteditable>${col}</div>
    `
}

function toColumn(col) {
    return `
        <div class="column" data-type="resizable">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(index, content) {
    const resize = index
        ? '<div class="row-resize" data-resize="row"></div>'
        : ''
    return `
        <div class="row">
        <div class="row-info">
            ${index ? index : ''}
            ${resize}
        </div>
        <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar) // map((el, index) => String.fromCharCode(CODES.A + index))
        .map(toColumn) // равно map(el => createCol(el))
        .join('')

    rows.push(createRow(null, cols))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')

        rows.push(createRow(i + 1, cells))
    }

    return rows.join('')
}