/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      '2xl':"1536px",
    },
    extend: {
      colors: {
        primaryColor:'#010a5e',
        primaryColorLight:'#010d78',
        secondaryColor:'#FFCC00',
        paragraphColor:'#c0c0c0',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor:'#cc3433',
        darkColor:'#000',
        darkColorLight:'#171717',
      },
      keyframes: {
        move: {
          "50%" : {transform: 'translateY(-2rem)'}
        }
      },
      animation: {
        'movingY':'move 3s linear infinite'
      }
    },
    container:{
      center:true,
      padding: {
        DEFAULT:'1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}
