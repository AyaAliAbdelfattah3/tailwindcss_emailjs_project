/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens : {
        xs : "320px",
        sm : "375px",
        sml : "560px",
        md : "667px" ,
        mdl : "768px",
        lg : "860px",
        lgl : "1024px",
        xl : "1280px",
      }
    },
  },
  plugins: [],
}

