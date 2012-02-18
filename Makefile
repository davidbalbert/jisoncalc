parser.js: parser.y lexer.l
	jison parser.y lexer.l

.PHONY: clean
clean:
	rm -f parser.js
