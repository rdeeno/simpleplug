const errors = {
    error: 'You have an error'
}

class SimpleMethods {
    constructor() {}
    find(selector) {
        if (typeof selector === 'string') {
            var element = document.querySelectorAll(selector);
            return element
        }
    }
    attr(selector, name, value) {
        let attrContainer = [];
        var element = typeof selector === 'string' ? this.find(selector) : selector
        element.forEach(el => {
            if (value != null) {
                el.setAttribute(name, value)
            } else {
                attrContainer.push(el.getAttribute(name, value))
            }
        })
        return attrContainer
    }
    addClass(selector, cls) {
        if (!selector) {
            return console.log('Give an selector')
        }
        this.classMethod(selector, cls, 'add')
    }
    removeClass(selector, cls) {
        if (!selector) {
            return console.log('Give an selector')
        }
        this.classMethod(selector, cls, 'remove')
    }
    classMethod(selector, cls, method) {
        var element = typeof selector === 'string' ? this.find(selector) : selector
        for (let i = 0; i < element.length; i++) {
            element[i].classList[method](cls)
        }
    }
    fadeIn(selector, options) {
        this.defineEffect(selector, options)
        let element = document.querySelector(selector);
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.opacity = 1;
        }, options.delay);
    }
    fadeOut(selector, options) {
        this.defineEffect(selector, options)
        let element = document.querySelector(selector);
        element.style.opacity = 1;
        setTimeout(() => {
            element.style.opacity = 0;
        }, options.delay);
    }
    defineEffect(selector, options) {
        let defaults = {
            delay: 1000,
            duration: 1000
        }
        let params = Object.assign({}, defaults, options)
        let element = document.querySelector(selector);
        element.style.transition = params.duration / 1000 + 's';
    }
    ihtml(selector, text) {
        if (!selector) {
            return
        }
        var elm = document.querySelector(selector);
        if (text === undefined) {
            return elm.innerHTML
        }
        var element = document.querySelectorAll(selector);
        element.forEach(el => {
            el.innerHTML = text
        })
        return element
    }
    on(selector, method, func) {
        let element = typeof selector === 'string' ? this.find(selector) : selector
        element.forEach(selector => {
            selector.addEventListener(method, func)
        })
    }
}
var simple = new SimpleMethods();
