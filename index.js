/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-marker-cluster',

  included: function(app){

    if (!process.env.EMBER_CLI_FASTBOOT) {
  	  app.import(app.bowerDirectory + '/leaflet.markercluster/dist/leaflet.markercluster.js');
    }

  	app.import(app.bowerDirectory + '/leaflet.markercluster/dist/MarkerCluster.css');
  	app.import(app.bowerDirectory + '/leaflet.markercluster/dist/MarkerCluster.Default.css');
    
  }
};
