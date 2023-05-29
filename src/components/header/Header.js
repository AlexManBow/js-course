import {ExcelComponet} from '@core/ExcelComponent'

export class Header extends ExcelComponet {
    static className = 'excel__header'

    toHTML() {
        return ` 
            <input type="text" class="input" value="Новая таблица"></input>
            <div>
                <div class="button">
                    <i class="material-symbols-outlined">delete</i>
                </div>
                <div class="button">
                    <i class="material-symbols-outlined">exit_to_app</i>
                </div>
            </div>`
    }
}