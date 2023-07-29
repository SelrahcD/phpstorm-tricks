const { execSync } = require('child_process');
const fs = require('fs');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/snippets/**/*.gif");
  eleventyConfig.addPassthroughCopy("src/assets/build.css");

  eleventyConfig.addCollection("snippets", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/snippets/**/*.md");
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
      includes: "_templates",
    },
  };
};
