export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div')
        this.components.forEach(Component => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
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