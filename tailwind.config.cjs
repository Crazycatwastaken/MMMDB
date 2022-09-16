/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'accent': '#e22016',
                'nav': '#2f3136',

            },
        }
    },
    plugins: [],
}