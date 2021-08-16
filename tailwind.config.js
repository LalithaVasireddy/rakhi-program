module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: false,
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/custom-forms'),
		require('tailwind-heropatterns')({
			variants: [],
			patterns: ['polka-dots', 'signal'],
			colors: {
				default: '#9C92AC',
			},
			opacity: {
				default: '0.4',
			},
		}),
	],
};
