install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

up-major-version:
	npm version major

up-version-minor:
	npm version minor

up-patch-version:
	npm version patch
