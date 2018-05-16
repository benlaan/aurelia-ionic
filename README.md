# Aurelia with Ionic CSS

> ### This package is an Aurelia based component library leveraging the ionic framework's CSS

This code base is both a component library as well as a sample application that leverages those components. It's still very early, but has enough components to build a basic app.

# sample code

see [Books.html](https://github.com/benlaan/aurelia-ionic/tree/master/src/sample/books.html) or [BookEdit.html](https://github.com/benlaan/aurelia-ionic/tree/master/src/sample/bookEdit.html) for some samples

# Getting started

Make sure you have installed [Node](https://nodejs.org/), then globally install [aurelia-cli](https://aurelia.io/) 

## Run:

```
npm install
au build-plugin
au run --watch
```

## Navigate:

to `http://localhost:9000/`. You'll get best results either by using Chrome with F12 dev tools, in device mode, or ideally within an actual device's browser. This may require some network-fu to get working correctly!

From chrome, you can switch the device from android to ios. If you do so, you will need to reload the page explicitly.

The app will automatically reload if you change any of the source files. Currently the watch functionality doesn't work correctly when updating component resources (yet)

## Building the project

* Run `au build-plugin` to build the plugin itself. The build artifacts will be stored in the `dist/` directory, and are required by the sample app
* Run `au build` to build the project. It will also execute build-plugin. The build artifacts will be stored in the `scripts/` directory. 
  * Use the `--env prod` flag for a 
production build.

# Using these packages within an aurelia project

*TODO: document the process to integrate this package into an aurelia project*

# How does it work?

The components below rely on Ionic Framework's excellent CSS. The CSS works on custom elements directly, thus many of these aurelia components require no custom markup at all. Most do require some custom classes to be attached to the custom element itself at runtime, which is what the bulk of the actual view model code does.

## Components

The following 'ionic' inspired components exist (and work well *so far*) - keeping with the spirit of ionic, not necessarily a perfect replica! It does use the ionic framework CSS as-is however

- ion-app
- ion-buttons
- ion-card
- ion-card-content
- ion-card-footer
- ion-card-header
- ion-column
- ion-content
- ion-footer
- ion-header
- ion-icon
- ion-img
- ion-input
- ion-item
- ion-label
- ion-list
- ion-row
- ion-segment
- ion-segment-button
- ion-spinner
- ion-title
- ion-toolbar
- toolbar-button
- toolbar-content

<br />
