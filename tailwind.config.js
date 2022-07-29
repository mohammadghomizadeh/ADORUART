const customTheme = require('./theme');
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { ...customTheme },
  },
  plugins: [],
}
