/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBackground1:"#EDF2F2",
        colorBackground2:"#BDA57F",
        colorBackground3:"#EC7E2C",
        colorBackground4:"#866F5E",
        colorBackground5:"#2D3D35",
        colorTheme1:"#2F2F2F",
        colorTheme2:"#947A6C",
        colorTheme3:"#A0978A",
        colorTheme4:"#D0D7D3",
        colorTheme5:"#93AEB0"
      },
      fontFamily:{
        Monserrat:"Monserrat",
        MonserratBold:"MonserratBold",
        Rubik:"Rubik"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
