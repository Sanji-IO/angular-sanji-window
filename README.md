# angular-sanji-window [![Build Status](https://travis-ci.org/Sanji-IO/angular-sanji-window.svg?branch=master)](https://travis-ci.org/Sanji-IO/angular-sanji-window)

You can define states and navigate between states in window.

- [Requirements](#requirements)
- [Browser Support](#browser-support)
- [Quick Install](#quick-install)
- [How to Use](#how-to-use)

## Requirements
Sanji window UI is develped based on webpack and ES2015.

- angularjs
- angular-material
- angular-material-icons
- webpack
- babel
- babel-runtime

## Browser Support
- Chrome
- Firefox
- Safari

## Quick Install
```sh
npm install angular-sanji-window --save
```

This will copy the angular-sanji-window files into a `node_modules` folder, along with its dependencies.

## How to Use
Load the script files in your application:

```javascript
import sjWindow from 'angular-sanji-window';
angular.module('yourApp', [sjWindow]);
```

Define your states:  
Note: You need to define default-state.

```html
<sanji-window window-name="Ethernet">

  <sanji-window-state state-name="sanji-info" default-state link-name="Information">
    <div>This state is for showing ethernet information.</div>
  </sanji-window-state>

  <sanji-window-state state-name="sanji-edit" link-name="Settings" icon="settings">
    <div>This state is for editing ethernet config.</div>
  </sanji-window-state>

</sanji-window>
```

## Project Setup
```sh
npm install
```

## Development
```sh
npm start
```

## Release
```sh
npm run build
```
