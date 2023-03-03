import {Lib} from "./player/lib.js";

new Lib(
    {
        target: '.my-player',
        slides: [
            {
                url: 'images/chunk1.jpg',
                alt: 'slide1',
                overlays: [
                    {
                        type: 'Text',
                        text: 'Привет',

                        styles: {
                            color: 'orange',
                            'font-size': '60px',
                            'text-shadow': '1px 1px #000',

                            top: '60%',
                            left: '30%',

                            'transform': 'rotate(-30deg)'
                        }
                    }
                ]
            },

            {
                url: 'images/chunk2.jpg',
                alt: 'slide1',
                overlays: [
                    {
                        type: 'Text',
                        text: 'Привет Мир',

                        styles: {
                            color: 'orange',
                            'font-size': '30px',
                            'text-shadow': '1px 1px #000',

                            bottom: '10%',
                            right: '30%',

                            transform: 'rotate(-90deg)',
                            animation: 'scale 2s infinite ease-in-out'
                        }
                    }
                ]

            },
            {
                url: 'images/chunk2.jpg',
                alt: 'slide2'
            },
            {
                url: 'images/chunk1.jpg',
                alt: 'slide3'
            }
        ],
        delayPerSlide: 5
    }
)

