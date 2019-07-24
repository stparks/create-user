const DomTools = {
    hasClass: function (el, className) {
        if (el.classList)
            return el.classList.contains(className);
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },

    addClass: function (el, className) {
        if (el.classList)
            el.classList.add(className)
        else if (!this.hasClass(el, className))
            el.className += " " + className;
    },

    removeClass: function (el, className) {
        if (el.classList)
            el.classList.remove(className)
        else if (this.hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    },
};

export default DomTools;