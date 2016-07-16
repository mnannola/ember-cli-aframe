# ember-cli-aframe
This ember addon wraps [A-Frame](https://aframe.io/), a WebVR framework that uses HTML markup combined with [THREE.js](http://threejs.org/) to render 3d scenes viewable in a browser or in a VR headset. It also includes some ember components that wrap various a-frame elements.

## Installation
Run this command in a ember-cli application
* `ember install ember-cli-aframe`
This will handle adding the `a-frame` bower package to the consuming ember-cli application and making sure it's included in the vendor.js file.

## Running
Since ember-cli-aframe is an ember addon, you should install the addon into an existing ember-cli application.  To run the dummy app which includes the Hello World a-frame example using the ember components:
* `ember server`
*  and go to http://localhost:4200.

## Basic Usage
This addon includes ember components which are thin wrappers around a-frame components.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
