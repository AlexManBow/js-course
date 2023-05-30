import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')

        this.components.forEach(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
        })


        return $root
    }

    render() {
        // afterbegin, afterend, beforebegin, beforeend
        // 1. this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')
        // 2. const node = document.createElement('h1')
        //    node.textContent = 'TEST'
        //    this.$el.append(node)
        this.$el.append(this.getRoot())
    }
}