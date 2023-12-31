import { colors } from '@caioquirinomedeiros/tokens'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colors,
    }
  },
  plugins: []
}
