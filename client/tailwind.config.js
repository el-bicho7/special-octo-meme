import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [daisyui],
    daisyui: {
        themes: [
            // {
            //     mytheme: {
            //         primary: '#a5f3fc',
            //         secondary: '#9ca3af',
            //         accent: '#fae8ff',
            //         neutral: '#2c211c',
            //         'base-100': '#2f1d2d',
            //         info: '#a8a29e',
            //         success: '#bef264',
            //         warning: '#fde047',
            //         error: '#e11d48',
            //     },
            // }, 
            "cyberpunk",
        ],
    },
};

