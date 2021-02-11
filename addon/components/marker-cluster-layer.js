import BaseLayer from 'ember-leaflet/components/base-layer';

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
    { name: 'marker-layer', as: 'marker' },
    { name: 'circle-marker-layer', as: 'circle-marker' },
  ];

  createLayer() {
    return this.L.markerClusterGroup(...this.requiredOptions, this.options);
  }
}
