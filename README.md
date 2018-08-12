# TypeScript Starter for React

A simple starter template for React using Typescript with webpack.

## Getting Started
After cloning the repository from GitHub use the command `npm install` to install all of the tools and dependencies. 

The command `npm run start` will compile and launch the project in dev mode.  Use browser at the location `http://localhost:8080/` with a watcher which will rebuild the project whenever any source file is changed. 

You can use `npm run build` to create a production build. For more build options take a look at the `package.json` file.

## Features of this starter

* Includes Bootstrap 4 and Font Awesome
* POSTCSS processing enabled with autoprefixer
* Incorporates dev and production mode config settings
* Hot Module Replacement is enable in dev config

### Faster Builds through use of fork-ts-checker-webpack-plugin

As your project becomes bigger, compilation time increases linearly. It's because typescript's semantic checker has to inspect all files on every rebuild. The simple solution is to disable it by using the `transpileOnly: true` option, but doing so leaves you without type checking and *will not output declaration files*.

You probably don't want to give up type checking; that's rather the point of TypeScript. So what you can do is use the [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin). It runs the type checker on a separate process, so your build remains fast thanks to `transpileOnly: true` but you still have the type checking. Also, the plugin has several optimizations to make incremental type checking faster (AST cache, multiple workers).




### Compatibility

* TypeScript: 2.4.1+
* webpack: 4.x+ (please use ts-loader 3.x if you need webpack 2 or 3 support)
* node: 6.11.5 minimum (aligned with webpack 4)



If you become aware of issues not caught by the test suite then please let us know. Better yet, write a test and submit it in a PR!

