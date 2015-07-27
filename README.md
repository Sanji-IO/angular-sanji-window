angular-sanji-window [![Build Status](https://travis-ci.org/Sanji-IO/angular-sanji-window.svg?branch=master)](https://travis-ci.org/Sanji-IO/angular-sanji-window)
====================

Sanji window UI is develped based on angular. This is one fo sanji ui module.

# Demo
[Demo site](http://sanji-io.github.io/angular-sanji-window/demo/)

# Table of contents

- [Requirements](#requirements)
- [Browser Support](#browser-support)
- [Quick Configuration](#quick-configuration)

## Requirements

- AngularJS

## Browser Support
- Chrome
- Firefox
- Safari

## Quick Usage
```sh
bower install angular-sanji-window --save
```

This will copy the sanji-window files into a `bower_components` folder, along with its dependencies. Load the script files in your application:

```html
<link rel="stylesheet" href="bower_components/angular-sanji-window/dist/sanji-window.css">
<script src="bower_components/angular-sanji-window/dist/sanji-window.js"></script>
```

```javascript
angular.module('yourApp', ['sanji.window']);
```

## Project Setup
```sh
npm install
bower install
```

## Development
```sh
npm start
```

## Release
```sh
npm run build
```
