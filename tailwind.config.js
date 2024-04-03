/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.pink.400'), // Corrected syntax
          },
        },
      }),
    },
  },
  plugins: [typography],
};
