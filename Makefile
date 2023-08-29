install: 
	npm ci

link:
	npm link

lint:
	npx eslint .

test:
	npm test

lintFix:
	npx eslint --fix .

publish:
	npm publish --dry-run

test-coverage:
	npm test -- --coverage