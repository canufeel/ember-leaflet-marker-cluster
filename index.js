/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-marker-cluster',

  included: function(app){
  	app.import(app.bowerDirectory + '/leaflet.markercluster/dist/leaflet.markercluster.js');
  	app.import(app.bowerDirectory + '/leaflet.markercluster/dist/MarkerCluster.css');
  	app.import(app.bowerDirectory + '/leaflet.markercluster/dist/MarkerCluster.Default.css');
  }
};
