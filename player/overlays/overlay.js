 export class Overlay {
     /**
      *Тип наложения
      * @type {string}
      * */

    type;
    /**
     * список дополнительных классов для наложения
     * @type {string[]}
     * */
    classes = [];

    /**
     * словарь дополнительных стилей
     * @type {Object<string, string>}
     * */
    styles = {};



    /**
     * рендерит исходный виджет
     * @param {{
     *     classes?: string[],
     *     styles?: Object<string, string>
     * } =} [params] - параметры наложения
     *
     * 1. type - тип создаваемого наложения
     * 2. [classes] - список дополнительных классов
     * 3. [styles] - список дополнительных стилей
     */


    constructor(params) {
        this.type = params.type;

        if (typeof  this.type !== 'string') {
            throw  new TypeError('A type of the created overlay is not specified')
        }


        this.classes = params?.classes ?? this.classes

        if (!Array.isArray(this.classes)) {
            throw new TypeError('Additional classes can be defined only as array');
        }

        this.styles = params?.styles  ?? this.styles

        if (typeof this.styles !== 'object') {
            throw new TypeError('Additional styles can be defined only as object');
        }
    }

    /**
     * рендерит исходный виджет
     * @returns {Element}
     */

    render () {
        const
            styles = Object.entries(this.styles)
                .map((el) => el.join(':'))
                .join(';');

        const tpl = `<div class="player-chunk-overlay" style="${styles}"></div>`

        const wrapper = document.createElement('div');
        wrapper.innerHTML = tpl;

        return wrapper.children[0]
    }
}