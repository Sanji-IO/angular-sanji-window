angular-sanji-window [![Build Status](https://travis-ci.org/Sanji-IO/angular-sanji-window.svg?branch=master)](https://travis-ci.org/Sanji-IO/angular-sanji-window)
====================

Sanji window UI is develped based on angular. This is one fo sanji ui module.

#Table of contents

- [Requirements](#requirements)
- [Browser Support](#browser-support)
- [Quick Configuration](#quick-configuration)

## Requirements

- jQuery
- AngularJS
- [lodash](https://github.com/lodash/lodash)

## Browser Support
* Chrome
* Firefox
* Safari

## Quick Configuration
```sh
bower install angular-sanji-window --save
```

This will copy the sanji-validator files into a `bower_components` folder, along with its dependencies. Load the script files in your application:

```html
<link rel="stylesheet" href="bower_components/angular-sanji-window/dist/sanji-window.css">
<script src="bower_components/angular-sanji-window/dist/sanji-window.js"></script>
```

```javascript
angular.module('yourApp', ['sanji.window']);
