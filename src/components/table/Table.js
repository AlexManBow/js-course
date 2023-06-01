import {ExcelComponet} from '@core/ExcelComponent'
import {createTable} from "@/components/table/table.template";

export class Table extends ExcelComponet {
    static className = 'excel__table'
 toHTML() {
        return createTable()
    }
}