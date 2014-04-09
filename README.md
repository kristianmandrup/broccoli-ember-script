# broccoli-ember-script

A CoffeeScript filter for Broccoli.

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
