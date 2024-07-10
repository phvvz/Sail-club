install:
	npm install

lint:
	npx stylelint ./css/*.css
	npx linthtml ./*.html

# deploy:
	# npx surge --project ./src --domain
