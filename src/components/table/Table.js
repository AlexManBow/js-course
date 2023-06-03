import {ExcelComponet} from '@core/ExcelComponent'
import {createTable} from "@/components/table/table.template";

export class Table extends ExcelComponet {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown'] // , 'mousemove', 'mouseup']
        });
    }

    toHTML() {
        return createTable()
    }

    onMousedown(event) {
        // console.log(event.target.getAttribute('data-resize'))
        if (event.target.dataset.resize) {
            console.log('start resizing')
        }
    }

    // onClick() {
    //     console.log('click')
    // }
    //
    // onMousemove() {
    //     console.log('mousemove')
    // }
    //
    // onMouseup() {
    //     console.log('mouseup')
    // }
}