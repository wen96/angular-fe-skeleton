# Front-end Skeleton

## Quickstart

Run:

    npm install
    gulp watch

Then, browse [http://localhost:4321/](http://localhost:4321/)

## Introduction

This is almost a fork of [rehabstudio/fe-skeleton](https://github.com/rehabstudio/fe-skeleton) including AngularJS, Boostrap and jquery.

The intention of this skeleton is to give a base platform for you to build your
project on top of. All build tools are supplied through Node and use Gulp as a
task runner. It is a collection of build tools, configuration files, folder
structures and more. Below are some of the features provided:

- Compile and prefix style sheets from SASS.
- Bundle and uglify JavaScript source files into payloads.
- Lint source files to ensure standards and conformance.
- Perform testing via a test runner and test suite.
- Watch source files and trigger compilation as required.
- Optimize image assets of various formats.
- Convenience methods for building front-end style sheets and scripts.

## Settings and Configuration
There are a multitude of settings files included in the root of the repository.

`.babelrc` is a configuration file used by gulp when consuming skeleton gulp
tasks. It is loaded automatically and isn't referenced anywhere in our codebase.

`.editorconfig` is a configuration file for
[EditorConfig](http://editorconfig.org/); a plugin / package that can be
installed in most popular editors. It enforces all team members to use the same
formatting settings such as spaces over tabs, line endings and so on.

`.eslintrc.json` is used in conjuntion with the linting tool
[ESLint](http://eslint.org/) and can be used to customise the rules which the
projets JavaScript source code must adhere to.

`.gitignore` offers a collection of common files and folders that should be
removed from source control, as well as some custom files generated by the
tooling of this skeleton.

`.npmrc` can be used to set project specific configuration options for NPM.

`karma.conf.js` houses configuration for
[Karma](http://karma-runner.github.io/). It can also contain settings for Mocha,
Chai and Sinon.

`web-manifest.json` brings "Add to homescreen" functionality by allowing control
over settings such as theme colour, orientation, homescreen name and icon.

`run/config.js` is a global file included into each of the build tool tasks and
acts as a central place for task configuration.

## Test Suite
Test specifications should be placed into `js/tests/` with a suffix of
`.spec.js`. These files are then required into an overall test wrapper file
(`run/tasks/test/wrapper.js`) from which webpack creates one single test bundle.
This bundle is then used by Karma and any tests within are then processed. The
test specs themselves are piped through Webpack so be sure to write the contents
of the file syntactically as you would any other JavaScript file in the project.

The testing stack is Mocha, Chai and Sinon, with Karma as the test runner. This
gives you a full toolset of test frameworks, assertion libraries, spies and
more. Each component of the testing stack is already loaded into the scope of
the test spec so you can just their global/top-level functions automagically
(i.e. `assert`, `expect`).

An example test spec is shown below, which loads in a contrived model and runs
some tests.
```
'use strict';

// Loading dependencies.
import FeatureModel from '../src/models/FeatureModel';

describe('The Feature model', function() {

    beforeEach(function() {
        this.testModel = new FeatureModel();
    });

    afterEach(function() {
        this.testModel = null;
    });

    it('should have defaults', function() {
        expect(this.testModel.to.have.ownProperty('defaults');
    });

});
```

## Task Breakdown
Each of the tasks have documentation at the top of their source files and list
any potential command-line arguments they can take. Below is a short description
of each available task.

### `build`
Convenience method that will ensure style sheets and javascript are compiled.
After this, all assets (style sheets, images, html, fonts, web manifest and
scripts) are copied over to the `destPath`.

### `default`
An alias for `build`.

### `watch`
A watch method that will look for changes to source files, then re-trigger
compilation. Hosts the `dist` folder via Webpack BrowserSync.

### `images`
Takes site image assets and optimizes them.

### `lint`
Examines JavaScript source files for errors and code that doesn't conform to the
specified standards.

### `scripts`
Compiles source files into minified, uglified payloads.

### `styles`
Compiles SASS into CSS and autoprefixes where applicable.

### `test`
Runs the test runner and any tests within the front-end tests folder. Also
outputs JUnit XML for Jenkins.
