import {Overlay} from './overlay.js'

export class Text extends Overlay {
    /**
     * Текст-содержимого наложения
     * @type {string}
     * */
    text;


    /**
     * @override
     * @param {{
     * src: string,
     * text: string,
     * alt?: string,
     * type: string,
     * classes?: string[],
     * styles?: Object<string, string>,
     * }=} params - параметры наложения:
     *
     * 1. text - текст содержимого наложения
     */


    /** @override */
    constructor(params) {
        super(params);

        this.text = params?.text;

        if (typeof this.text !== 'string') {
            throw new ReferenceError('A text to the created overlay is not specified');
        }
    }

    /** @override */
    render() {
        const el = super.render()

        const span = document.createElement('span');
        span.textContent = this.text

        el.appendChild(span);

        return el;
    }
}