/** @type {import('tailwindcss').Config} */
module.exports = {
  // @NOTE: mention all the files where you use Tailwind CSS classes which Tailwind should look at while created the final bundled css file.
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      // @NOTE:use the extend object instead of directly writing inside theme unless you want to override default Tailwind values for something.
        // @NOTE: define custom media queries here
        // @NOTE: in aspect ratio width is written first.
        // @NOTE:here we consider widescreen when screen is 3 times of what the height is 2 times. means ratio of screen-width and screen-height is 3:2
      extend: {
        screens: {
            widescreen: { 'raw': '(min-aspect-ratio: 3/2)'},
            tallscreen: { 'raw': '(max-aspect-ratio: 13/20)'},
        },
        keyframes: {
          'open-menu': {
            '0%': { transform: 'scaleY(0)'},
            '80%': { transform: 'scaleY(1.2)'},
            '100%': { transform: 'scaleY(1)'},
          },
        },
        animation: {
          'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
      },
    },
    plugins: [],
  };
  