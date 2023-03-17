# Github repositories search app

## Deploy

-   [Github repos search](https://efandor.github.io/hrustg2.2/dist/index.html);

## Installation

Clone project and install dependencies:

```bash
npm install
```

How to run WebPack dev server [Local deploy](http://localhost:9000/):

```bash
npm start
```

Check linter rules with eslint-config-airbnb-base configuration:

```bash
npm run lint
```

Autofix linter rules:

```bash
npm run lint-fix
```

How to build project:

```bash
npm run build
```

## Features

`.js` files process by `babel` - JavaScript compiler configured `webpack-dev-server`
```js
export class Header {...}
import { Header } from '../components/Header/Header';

export const isShortLength = () => {...}
import { isShortLength } from './isShortLength';
```

`.svg`,`.png`, `.jpg` files processed by `file-loader`
```js
import logo from '../../assets/images/...';
```

 `.css` files processed by `style-loader`, `css-loader` and `sass-loader`
 To use css as module, it should be named as `*.module.scss`
 This variable with lowerCamelCase naming contains in SCSS file with kebab-case name .some-div-name
```js
import "./main.scss";
import css from "./header.module.scss"; 

`<div style="${css.someDivName}"></div>`;
```
