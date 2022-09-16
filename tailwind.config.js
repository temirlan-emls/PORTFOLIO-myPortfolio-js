/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                myWhite: "#FFFFFF",
                myBlack: "#0f172a",
                myGray: "#e2e8f0",
                myPurple: "#A64AC9",
                myYellow: "#FCCD04",
                myPink: "#FFB48F",
                myAmber: "#F5E6CC",
                myCyan: "#17E9E0",
            },
            fontFamily: {
                myFont: ["Barlow", "sans-serif"],
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
