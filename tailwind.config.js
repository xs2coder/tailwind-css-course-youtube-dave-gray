/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        // define custom media queries here
        // in aspect ratio width is written first.
        //here we consider widescreen when screen is 3 times of what the height is 2 times. means ratio of screen-width and screen-height is 3:2
      extend: {
        screens: {
            widescreen: { 'raw': '(min-aspect-ratio: 3/2)'},
            tallscreen: { 'raw': '(min-aspect-ratio: 1/2)'},
        }
      },
    },
    plugins: [],
  };
  