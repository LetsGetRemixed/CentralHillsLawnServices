	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./src/**/*.{js,jsx,ts,tsx}",
	  ],
	  theme: {
	    extend: {
        colors: {
          'sage-green': '#9BAF9A',
          'rustic-brown': '#936242',
          'warm-sand': '#C5A880',
          'muted-clay': '#D9A084',
          'deep-forest-green': '#3D5A40',
          'Bright-White': '#FFFFFF',
        },
        fontFamily: {
          header: ['Westwood', 'Playbill', 'sans-serif'], // You can replace this with any western-style font
          body: ['Lora', 'Roboto Slab', 'serif'],
        },

      },
	  },
	  plugins: [],
	};
	

