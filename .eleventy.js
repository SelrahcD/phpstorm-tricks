const {execSync} = require('child_process');
const fs = require('fs');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const markdownIt = require("markdown-it");
const codeClipboard = require("eleventy-plugin-code-clipboard");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(codeClipboard);

	eleventyConfig.addWatchTarget('./src/snippets/**/*.md')

	eleventyConfig.addPassthroughCopy("src/snippets/**/*.gif");
	eleventyConfig.addPassthroughCopy("src/assets/build.css");
	eleventyConfig.addPassthroughCopy("src/assets/images/*.(jpg|png)");

	eleventyConfig.addCollection("snippets", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/snippets/**/*.md");
	});

	// Add within your config module
	const md = new markdownIt({
		html: true,
	}).use(codeClipboard.markdownItCopyButton);

	eleventyConfig.setLibrary("md", md);

	eleventyConfig.addFilter("markdown", (content) => {
		return md.render(content);
	});

	// Before build hook to process CSS with PostCSS
	eleventyConfig.on('beforeBuild', () => {
		const inputPath = './src/assets/styles.css';
		const outputPath = './src/assets/build.css';

		try {
			// Run the Tailwind CSS build command
			execSync(`npx tailwindcss build ${inputPath} -o ${outputPath}`);
		} catch (error) {
			console.error(error);
			process.exit(1);
		}
	});

	return {
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
		},
	};
};
