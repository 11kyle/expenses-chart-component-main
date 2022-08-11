/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'hslSoftRed': 'hsl(10, 79%, 65%)',
            'hslCyan': 'hsl(186, 34%, 60%)',
            'hslDarkBrown': 'hsl(25, 47%, 15%)',
            'hslMediumBrown': 'hsl(28, 10%, 53%)',
            'hslCream': 'hsl(27, 66%, 92%)',
            'hslVeryPaleOrange': 'hsl(33, 100%, 98%)',
        }
      },
    },
    plugins: [],
  }