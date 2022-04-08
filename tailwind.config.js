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
                        400: '#35DDD3',
                        500: '#37C8C3',
                        600: '#06ADB3',
                        700: '#21A7B3',
                    },
                    'light': {
                        'green': {
                            100: '#EBF5F5',
                            200: '#D4E2E2',
                        },
                    },

                },
            },
            borderRadius: {
                '4xl': '2rem'
            }
        },

    },
    plugins: [],
}
