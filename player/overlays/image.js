import { Overlay } from './overlay.js'

export class Image extends Overlay {
    /**
     * путь к изображению
     * @type {string}
     * */
    src;


    /**
     * альтернативный текст изображения
     * @type {string}
     * */
    alt = '';

    /**
     * @override
     *
     * @param {{
     * src: string,
     * alt?: string,
     * type: string,
     * classes?: string[],
     * styles?: Object<string, string>,
     * }=} params - параметры наложения:
     *
     * 1. src - путь к изображению.
     * 2. [alt] - альтернативный тест изображения
     */


    constructor(params) {
        super(params);

        this.src = params?.src;

        if (typeof this.src !== 'string') {
            throw new ReferenceError('URL to the created overlay is not specified');
        }

        this.alt = params?.alt ?? this.alt;

    }

    /** @override */
    render() {
        const el = super.render()

        el.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;

        return el
    }
}