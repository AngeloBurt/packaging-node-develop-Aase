## Project description

Node package for personal development

## Install

```
npm install node-aase
```

## updated version

```
npm version prerelease
```

## Usage

```
// >= v1.0.10

const { getFiles } = require("node-aase/getfile");

// or

const esa = require("node-aase/esa46");

```

```
// < v1.0.10
const aase = require("node-aase");

var enc = aase.enc_base64("AngeloBurt");
console.log(enc);// QW5nZWxvQnVydA==
var dec = aase.dec_base64("QW5nZWxvQnVydA==");
console.log(dec);// AngeloBurt

var clo_enc = aase.clo("QW5nZWxvQnVydA==", "enc");
console.log(clo_enc);// JD4mADceJmEbwZ==
var clo_dec = aase.clo("JD4mADceJmEbwZ==", "dec");
console.log(clo_dec);// QW5nZWxvQnVydA==
```

This is a simple package. There are still many imperfections.

Please give us your advice. I wish you all the best.
