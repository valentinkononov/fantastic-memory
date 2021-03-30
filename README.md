# ts-num-short

## Typescript based number shortener

[![Build Status](https://travis-ci.org/valentinkononov/ts-num-short.svg?branch=master)](https://travis-ci.org/valentinkononov/ts-num-short)
[![codecov](https://codecov.io/gh/valentinkononov/ts-num-short/branch/master/graph/badge.svg)](https://codecov.io/gh/valentinkononov/ts-num-short)
![npm](https://img.shields.io/npm/v/ts-num-short)
![npm bundle size](https://img.shields.io/bundlephobia/min/ts-num-short?label=bundle-size)
![npm](https://img.shields.io/npm/dm/ts-num-short)
![NPM](https://img.shields.io/npm/l/ts-num-short)

## Mission

TS-num-short allows showing approximate number information in a short manner - 1K, 1M, 1B, 1T.

Useful for table columns, labels and other UI places, where UX capacity is critical.

Tool rounds numbers, so that `999` gives `1K` as result of shortening.

Our mission is to provide simple library specifically for TypeScript usage. So that developers can have standard `import` constructions fokr regular typeScript projects.

Library is covered with tests. Code is simple and readable, so that you can easily copy and modify it if needed.

Function `numShort` does shortening as well as rounding of numbers so that you can

## Usage

Install package

```shell script
    npm install ts-num-short --save
```

Use `numShort` function:

```typescript
    import { numShort } from 'ts-num-short';

    numShort(1_000); // 1K
    numShort(999_000); // 999K
    numShort(999_999); // 1M
    numShort(1_000_000_000); // 1B
    numShort(1_000_000_000_000); // 1T
```

## Stay in Touch

* Author - [@ValentinKononov](https://twitter.com/ValentinKononov)

Thanks for using it! Enjoy coding!
