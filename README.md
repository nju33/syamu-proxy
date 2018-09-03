# Syamu Proxy


![npm](https://img.shields.io/npm/v/syamu-proxy.svg)
[![CircleCI](https://circleci.com/gh/nju33/syamu-proxy.svg?style=svg&circle-token=bded2c58c08c7c5efa0b8a7341ab95df68b0e153)](https://circleci.com/gh/nju33/syamu-proxy)
[![donate](https://badgen.net/badge/Donate%20via%20PayPal/100円/169bd7)](https://www.paypal.me/nju33/100)

## Install

```bash
yarn add syamu-proxy
```

## Usage

```js
const syamuProxy = require('syamu-proxy');

const proxied = syamuProxy({
  num: 28,
  get num2() {
    return this.num;
  },
  str: 'a',
  get str2() {
    return this.str;
  },
  arr: ['foo', 'bar'],
  obj: {
    foo: 'foo',
    bar: 'bar'
  },
  void: undefined
});

console.log(proxied.num); // 0
console.log(proxied.num2); // 0
console.log(proxied.str); // ''
console.log(proxied.str2); // ''
console.log(proxied.arr); // []
console.log(proxied.obj); // {}
console.log(proxied.null) // null
console.log(proxied.undefined) // undefined
```
