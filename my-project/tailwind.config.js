/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "login-bg": "url('./src/assets/3D logo.png')",
                "dash-bg": "url('./src/assets/3D Elements.png')",
                "dash2-bg": "url('./src/assets/Waves.png')",
            },
        },
    },
    plugins: [],
};
