/* jshint node: true */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const BroccoliDebug = require('broccoli-debug');
const fastbootTransform = require('fastboot-transform');
const path = require('path');

module.exports = {
  name: 'ember-leaflet-marker-cluster',

  included(app) {
    let vendor = this.treePaths.vendor;
    let dir = `${vendor}/leaflet.markercluster`;

    // Main modules
    app.import(`${dir}/leaflet.markercluster.js`);
    app.import(`${dir}/MarkerCluster.css`);
    app.import(`${dir}/MarkerCluster.Default.css`);

    return this._super.included.apply(this, arguments);
  },

  treeForVendor(vendorTree) {
    let debugTree = BroccoliDebug.buildDebugCallback(this.name),
        trees = [];

    if (vendorTree) {
      trees.push(
        debugTree(vendorTree, 'vendorTree')
      );
    }

    let js = fastbootTransform(
      moduleToFunnel('leaflet.markercluster', {
        include: ['*.js'],
        destDir: 'leaflet.markercluster'
      })
    );

    trees.push(
      debugTree(js, 'leaflet.markercluster:js')
    );

    return debugTree(mergeTrees(trees), 'mergedVendorTrees');
  },

  treeForStyles(styleTree) {
    let debugTree = BroccoliDebug.buildDebugCallback(this.name),
        trees = [];

    if (styleTree) {
      trees.push(
        debugTree(styleTree, 'styleTree')
      );
    }

    let css = moduleToFunnel('leaflet.markercluster', {
      include: ['*.css'],
      destDir: 'leaflet.markercluster'
    });

    trees.push(
      debugTree(css, 'leaflet.markercluster:css')
    );

    return debugTree(mergeTrees(trees), 'mergedStyleTrees');
  }

};

function moduleToFunnel(moduleName, opts) {
  opts = opts || { destDir: moduleName };
  return new Funnel(resolveModulePath(moduleName), opts);
}

function resolveModulePath(moduleName) {
  return path.dirname(require.resolve(moduleName));
}
