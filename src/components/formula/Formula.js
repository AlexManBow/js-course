import {ExcelComponet} from '@core/ExcelComponent'

export class Formula extends ExcelComponet {
    static className = 'excel__formula'

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
            `
    }
}