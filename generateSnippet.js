const fs = require('fs');
const path = require('path');

function generateSnippet(name) {
	const snippetDirectory = path.join(__dirname, 'src', 'snippets', name);
	const markdownFile = path.join(snippetDirectory, `${name}.md`);

	// Create the snippet directory
	fs.mkdirSync(snippetDirectory);

	// Create the markdown file with sample content
	const markdownContent = `---
name: ${name}
description: Description of ${name} snippet.
type: Live template | Postfix completion template
tags:
  - tag1
  - tag2
---

Write your code snippet or instructions here.
`;
	fs.writeFileSync(markdownFile, markdownContent);

	console.log(`Snippet "${name}" generated successfully.`);
}

// Get the snippet name from command-line arguments
const snippetName = process.argv[2];

if (!snippetName) {
	console.error('Please provide a snippet name.');
	process.exit(1);
}

generateSnippet(snippetName);
