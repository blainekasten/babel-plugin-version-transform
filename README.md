# babel-plugin-version-transform
Replaces keyword `VERSION` with a stringified copy of the package.json version number.

## Example

### In

```json
version: "1.0.0"
```

```js
function log(data) {
  xhr({...data, version: VERSION});
}
```

### Out

```json
version: "1.0.0"
```

```js
function log(data) {
  xhr({...data, version: "1.0.0"});
}
```

## Installation

```sh
$ npm install babel-plugin-transform-define
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [
    "version-transform"
  ]
}
```

### Via CLI

```sh
$ babel --plugins version-transform script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["version-transform"],
});
```
