/** @type {import('tailwindcss').Config} */


const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#D8394B",
        "secondary": "#A2D785",
       
        "base-100": "#ffffff",
        "info": "#0CC0DF",
        "success": "#A2D785",
        "warning": "#FBC846",
        "error": "#D8394B",
        "accent": "#3F3955"
        
        
        
      }
    },
    
  },
  plugins: [require("daisyui"),FormKitVariants],
}

