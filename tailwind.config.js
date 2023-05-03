/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('../public/images/logo.png')",
            },
            colors: {
                myYellow: "#FFFF3A",
            },
            fontFamily: {
                myFont: ["Alexandria", "sans"],
            },
            screens: {
                xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
                sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
                md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
                lg: { min: "1200px" }, // Desktop smallest.
                xl: { min: "1159px" }, // Desktop wide.
                xxl: { min: "1359px" }, // Desktop widescreen.
            },
            fontSize: { "10xl": "10rem", "11xl": "12rem" },
        },
    },
    plugins: [],
};
