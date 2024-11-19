/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                'positivus-green': '#B9FF66',
                'positivus-grey': '#F3F3F3',
                'positivus-dark': '#191A23',
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/forms'),
    ],
}