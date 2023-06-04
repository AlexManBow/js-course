import {ExcelComponet} from '@core/ExcelComponent'
import {createTable} from "@/components/table/table.template"
import {$} from "@core/dom"

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
           const $resizer = $(event.target)
            // const $parent = $resizer.$el.parentNode // bad!
            const $parent = $resizer.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            console.log($parent.data)

            document.onmousemove = e => {
                const delta = e.pageX - coords.right
                const value = coords.width + delta
                $parent.$el.style.width = value + 'px'
                console.log('[data-col="${$parent.data.col}"]')
                document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
                    .forEach(el => el.style.width = value + "px")
            }
            document.onmouseup = () => {
               document.onmousemove = null
            }
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