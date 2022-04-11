const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    important: true,
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./containers/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'vicm': {
                    'green': {
                        90: '#ccdcdc',
                        300: '#60D2D1',
                        400: '#35DDD3',
                        500: '#37C8C3',
                        600: '#06ADB3',
                        700: '#21A7B3',
                    },
                    'light': {
                        'green': {
                            100: '#EBF5F5',
                            200: '#D4E2E2',
                            200_04: 'rgba(212, 226, 226, 0.4)',
                            300: '#CCDCDC',
                        },
                    },
                    'whiteTransparent': {
                        10: 'rgba(255, 255, 255, 0.1)',
                        25: 'rgba(255, 255, 255, 0.25)',
                        50: 'rgba(255, 255, 255, 0.5)',
                        80: 'rgba(255, 255, 255, 0.8)',
                    },
                    'violet': {
                        100: '#f43f7e'
                    },
                    'yellow': {
                        100: '#fb9700',
                    },
                    'red' : {
                        100: '#FB0000'
                    },
                    'gray' : {
                        100: '#888888'
                    },
                },
            },
            borderRadius: {
                '4xl': '2rem'
            },
            borderWidth: {
                '6': '6px',
            },
            boxShadow: {
                't-sm': '0 0 10px 0px rgba(0, 0, 0, 0.1)',
                't-md': '0 10px 20px 0px rgba(0, 0, 0, 0.1)',
                't-lg': '0 15px 30px 5px rgba(0, 0, 0, 0.1)',
                't-xl': '0 20px 40px 5px rgba(0, 0, 0, 0.1)',
            },
            lineHeight: {
                '12': '3rem',
                '14': '4rem',
            }
        },

    },
    plugins: [],
}
