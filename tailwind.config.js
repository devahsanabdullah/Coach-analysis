/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'checked': '#000',
        'priamry':"#2C5C92",
        'secondry' :"#00000024"// Replace with your desired color
      },
      fontFamily: {
      
        headingBold:'heading-bold',
        headingBook:'heading-book',
        
      },
    }
  },
  plugins: []
}
