# is-webm [![Build Status](https://travis-ci.org/t1st3/is-webm.svg?branch=master)](https://travis-ci.org/t1st3/is-webm)

> Check if a Buffer/Uint8Array is a [WEBM](https://en.wikipedia.org/wiki/WebM) video


## Install

```sh
$ npm install --save is-webm
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isWebm = require('is-webm');
var buffer = readChunk.sync('unicorn.webm', 0, 3);

isWebm(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.webm');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isWebm(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isWebm(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 4 bytes.


## License

MIT © [T1st3](http://t1st3.com)
