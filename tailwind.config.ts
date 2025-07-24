import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                one: {
                    Brand: '#e6007e',
                },
            },
            animation: {
                slideInFromLeft: 'slideInFromLeft 0.3s ease-out',
                slideInFromRight: 'slideInFromRight 0.3s ease-out',
            },
            keyframes: {
                slideInFromLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-100%)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
                slideInFromRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(100%)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
            },
        },
    },
    plugins: [],
}

export default config
