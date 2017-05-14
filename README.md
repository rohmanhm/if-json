# If JSON

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/if-json.svg)](https://greenkeeper.io/)
Check if string is JSON or not (Support JSON5)

## How to install

  * via **npm**: `npm install --save if-json`
  * via **yarn**: `yarn add if-json`

## How to use
```javascript
const ifJSON = require('if-json')

const YOUR_GOOD_JSON = '{"test": "abc", "anu": 3}'
console.log(ifJSON(YOUR_GOOD_JSON)) // return true => object

const YOUR_BAD_JSON = '{"test" "abc", "anu": 3}'
console.log(ifJSON(YOUR_BAD_JSON)) // return false

// More example? check test/index.js
```

## Test
- [x] return true json with quote
- [x] return true json without quote
- [x] return true json5 with quote
- [x] return true json5 without quote
- [x] return false json with quote
- [x] return false json5 with quote

## LICENSE

Copyright 2017 - present M Habib Rohman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.