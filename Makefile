
templates/readme.js: templates/readme.md
	./node_modules/.bin/minstache < $< > $@
