module.exports = {
	content: [
		'./src/**/*.{njk,md}',
		'./src/**/*.svg',
	],
	theme: {
		fontFamily: {
			sans: [
				"IBM Plex Sans, sans-serif",
				{
					fontFeatureSettings: '"liga","tnum","case","calt","zero","ss01","locl","calt"',
					fontVariationSettings: '"opsz" 32'
				},
			],
		},
	},
}