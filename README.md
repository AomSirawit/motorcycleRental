# React + Vite
# MotorRental

Rental BigBike Website Frontend.

## Installation & Guide

1. create project
```bash
npm create vite@latest
```
2. install node module
```bash
npm install
```
3. install tailwindCSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```
4. config tailwindCSS in tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
5. add tailwind to main.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
}
```
6. install SweetAlert2
```bash
npm install sweetalert2
```
7. install daisyUI
```bash
npm i -D daisyui@latest
```
8. Then add daisyUI to your tailwind.config.js files:
```js
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```
9. Start Project
```bash
npm run dev
```
