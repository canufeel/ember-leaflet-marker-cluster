import BaseLayer from 'ember-leaflet/components/base-layer';
import { ParentMixin } from 'ember-composability-tools';

export default BaseLayer.extend(ParentMixin, {
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

	createLayer() {
		return this.L.markerClusterGroup(...this.get('requiredOptions'), this.get('options'));
	}
});
