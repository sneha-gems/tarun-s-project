// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          rigid: ['"rigid-square"', 'Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
    // Make sure Tailwind can scan your files:
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
      // './components/**/*.{js,ts,jsx,tsx}',
      // Add others if needed
    ],
  }
  