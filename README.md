# broccoli-ember-script

A EmberScript filter for [Broccoli](https://github.com/joliss/broccoli). This plugin simply compiles EmberScript to JS for Broccoli to further process, allowing Broccoli to control things such as optimization.

## Installation

```bash
npm install --save-dev broccoli-ember-script
```

## Usage

```js
var filterEmberScript = require('broccoli-ember-script');
tree = filterEmberScript(tree, options);
```

### Options

#### bare

If `bare` is true, the EmberScript compiler will not emit a top-level
function wrapper:

```js
filterEmberScript(tree, {
  bare: true
})
```

## Source Maps

Source maps are not yet supported.
