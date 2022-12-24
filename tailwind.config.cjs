/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				aqua: {
					normal: '#77D5AF',
					dark: '#6BC29F'
				},
				cornflower: {
					normal: '#5DA9E9',
					light: '#66BAFF'
				},
				dark: {
					light: '#303036',
					normal: '#2C2F33',
					dark: '#23272A',
					super: '#1b1d1f',
					duper: '#191b1d'
				}
			},
			fontSize: {
				'7xl': '4.5rem',
				'8xl': '6rem'
			}
		}
	},
	plugins: []
};
