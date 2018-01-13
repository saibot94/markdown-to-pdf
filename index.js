var markdownpdf = require('markdown-pdf');
var fs = require('fs');

fs.createReadStream('./data/README.md')
	.pipe(markdownpdf())
	.pipe(fs.createWriteStream('./readme.pdf'))


