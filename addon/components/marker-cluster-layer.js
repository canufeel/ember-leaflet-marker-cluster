import BaseLayer from 'ember-leaflet/components/base-layer';
import MarkerLayer from 'ember-leaflet/components/marker-layer';
import CircleLayer from 'ember-leaflet/components/circle-layer';

export default class MarkerClusterLayer extends BaseLayer {
  leafletOptions = [
    ...this.leafletOptions,
    'showCoverageOnHover',
    'zoomToBoundsOnClick',
    'spiderfyOnMaxZoom',
    'removeOutsideVisibleBounds',
    'animate',
    'animateAddingMarkers',
    'disableClusteringAtZoom',
    'maxClusterRadius',
    'polygonOptions',
    'singleMarkerMode',
    'spiderLegPolylineOptions',
    'spiderfyDistanceMultiplier',
    'iconCreateFunction',
  ];

  leafletEvents = [
    ...this.leafletEvents,
    // Marker clutster events
    'clusterclick',
    'clusterdblclick',
    'clustermousedown',
    'clustermouseover',
    'clustermouseout',
    'clustercontextmenu',
    'clusteradd',
    'clusterremove',
    'animationend',
    'spiderfied',
    'unspiderfied',
    // Marker events
    'click',
    'dblclick',
    'mousedown',
    'mouseover',
    'mouseout',
    'contextmenu',
    'dragstart',
    'drag',
    'dragend',
    'move',
    'remove',
    'add',
    'popupopen',
    'popupclose',
  ];

  componentsToYield = [
    ...this.componentsToYield,
    { name: 'marker-layer', as: 'marker', component: MarkerLayer },
    { name: 'circle-marker-layer', as: 'circle-marker', component: CircleLayer },
  ];

  createLayer() {
    return this.L.markerClusterGroup(...this.requiredOptions, this.options);
  }
}
