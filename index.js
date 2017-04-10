/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'ember-leaflet-marker-cluster',

  included(app) {

    if (!isFastBoot()) {

      const vendor = this.treePaths.vendor;

      // Main modules
      app.import(vendor + '/leaflet.markercluster/leaflet.markercluster.js');
      app.import(vendor + '/leaflet.markercluster/MarkerCluster.css');
      app.import(vendor + '/leaflet.markercluster/MarkerCluster.Default.css');

    }

    return this._super.included.apply(this, arguments);
  },

  treeForVendor(vendorTree) {
    var trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(moduleToFunnel('leaflet.markercluster', {
      include: ['*.js', '*.css'],
      destDir: 'leaflet.markercluster'
    }));

    return mergeTrees(trees);
  },

};

function moduleToFunnel(moduleName, opts) {
  opts = opts || { destDir: moduleName };
  return new Funnel(resolveModulePath(moduleName), opts);
}

function resolveModulePath(moduleName) {
  return path.dirname(require.resolve(moduleName));
}

// Checks to see whether this build is targeting FastBoot. Note that we cannot
// check this at boot time--the environment variable is only set once the build
// has started, which happens after this file is evaluated.
function isFastBoot() {
  return process.env.EMBER_CLI_FASTBOOT === 'true';
}
