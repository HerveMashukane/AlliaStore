    /** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: 'class',
      content: [
        "./src/**/*.{html,ts}",
      ],
      theme: {
        extend: {
          colors: {
            alliayellow: '#f38a06',
            alliablue: '#0046ba',
          }
        },
      },
      plugins: [],
    }