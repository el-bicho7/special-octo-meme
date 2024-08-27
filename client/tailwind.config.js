import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [daisyui],
    daisyui: {
        themes: [
            "aqua",
            "coffee",
            "light",
            {
                cyberpunk: {
                    ...require("daisyui/src/theming/themes")["cyberpunk"],
                    'base-content': 'white'
                }
            }
        ],
    },
};

