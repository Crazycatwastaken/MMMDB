/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'accent': '#ff8370',
                'nav': '#2f3136',

            },
        }
    },
    plugins: [],
}