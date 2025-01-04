# Realtime website serving
dev:
	npm run dev

# Build static files to './dist/'
build:
	npm run build

# Serve files built locally via 'make build'
serve:
	cd dist/
	npx http-server . -o -p 8000
