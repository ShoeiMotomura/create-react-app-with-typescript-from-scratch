# Create react app with typescript from scratch

```bash
# init
yarn init -y

# make directory
mkdir public src

# create index.html
touch public/index.html
vi public/index.html

# add libralies for build
yarn add -D webpack webpack-cli webpack-dev-server style-loader css-loader copy-webpack-plugin
yarn add -D ts-loader

# add react libralies
yarn add react react-dom css-module-types
yarn add typescript @types/node @types/react @types/react-dom @types/jest

# create gitignore
touch .gitignore
vi .gitignore

# create global.d.ts
touch global.d.ts
vi global.d.ts

# create webpack.config.js
touch webpack.config.js
vi webpack.config.js

# crete frontend module
touch src/index.tsx src/App.tsx src/App.css
vi src/index.tsx
vi src/App.tsx
vi src/App.css

# create tsconfig.json
touch tsconfig.json
vi tsconfig.json

# edit package.json for starting server
vi package.json
```
