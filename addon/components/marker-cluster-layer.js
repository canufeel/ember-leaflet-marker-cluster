import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';
import ContainerMixin from 'ember-leaflet/mixins/container';

const {get} = Ember;

export default BaseLayer.extend(ContainerMixin,{
	
	leafletOptions: [
	'showCoverageOnHover', 'zoomToBoundsOnClick', 'spiderfyOnMaxZoom', 'removeOutsideVisibleBounds',
	'animate', 'animateAddingMarkers', 'disableClusteringAtZoom', 'maxClusterRadius', 'polygonOptions',
	'singleMarkerMode', 'spiderLegPolylineOptions', 'spiderfyDistanceMultiplier', 'iconCreateFunction'
	],

	leafletEvents: [
	// Marker clutster events
	'clusterclick', 'clusterdblclick', 'clustermousedown', 'clustermouseover', 'clustermouseout',
	'clustercontextmenu', 'clusteradd', 'clusterremove', 'animationend', 'spiderfied', 'unspiderfied',
	// Marker events
	'click', 'dblclick', 'mousedown', 'mouseover', 'mouseout',
    'contextmenu', 'dragstart', 'drag', 'dragend', 'move', 'remove', 'add',
    'popupopen', 'popupclose'
	],

	createLayer(){
		return this.L.markerClusterGroup(...get(this,'requiredOptions'), get(this,'options'));
	},
	didInsertElement() {
		this._super(...arguments);
		this.layerSetup();
		get(this,'_childLayers').invoke('layerSetup');
	},
	willDestroyLayer() {
		get(this,'_childLayers').invoke('layerTeardown');
		get(this,'_childLayers').clear();
	},
	layerSetup() {
		if (Ember.isNone(get(this,'_layer'))) {
			this._layer = this.createLayer();
			this._addObservers();
			this._addEventListeners();
			this.didCreateLayer();
		}
		if (get(this,'containerLayer')) {
			if (!Ember.isNone(get(this,'containerLayer')._layer)) {
				get(this,'containerLayer')._layer.addLayer(this._layer);
			}
		}
	}
});
