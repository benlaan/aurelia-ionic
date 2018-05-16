# aurelia-ionic

> ### Aurelia based component library leveraging the ionic framework's CSS

This codebase is both a library page and a sample application that leverage those components. It's still very early, but has enough components to build a basic app

# How it works

Created with aurelia-cli

# Getting started

Make sure you have installed [Node](https://nodejs.org/), the globally insteall [Aurelia-Cli](https://aurelia.io/) Then run:
```
node install
au build-plugin
au run --watch
```
and Navigate to `http://localhost:9000/`. Best results occur either by using Chrome with F12 dev tools, in device mode, or ideally within an actual device's browser. This may require some network-fu to get working correctly!

The app will automatically reload if you change any of the source files.

### Building the project
Run `au build-plugin` to build the plugin itself. The build artifacts will be stored in the `dist/` directory, and are required by the sample app
Run `au build` to build the project. It will also execute build-plugin. The build artifacts will be stored in the `scripts/` directory. Use the `--env prod` flag for a production build.

## Functionality overview

The following 'ionic' components exist in some form - keeping with the spirit of ionic, not necessarily a perfect replica! It does use the ionic framework CSS as-is however

- ion-app 
- ion-buttons 
- ion-card-content 
- ion-card-footer 
- ion-card-header 
- ion-card 
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
- ion-segment-button 
- ion-segment 
- ion-spinner 
- ion-title 
- ion-toolbar 
- toolbar-button 
- toolbar-content 

<br />
