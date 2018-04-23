import BaseLayer from 'ember-leaflet/components/base-layer';
import DivOverlayableMixin from 'ember-leaflet/mixins/div-overlayable';

import {ParentMixin} from 'ember-composability-tools';
import layout from '../templates/marker-cluster-layer';

export default BaseLayer.extend(DivOverlayableMixin, {
  layout,

  leafletOptions: Object.freeze([
    'showCoverageOnHover', 'zoomToBoundsOnClick', 'spiderfyOnMaxZoom', 'removeOutsideVisibleBounds',
    'animate', 'animateAddingMarkers', 'disableClusteringAtZoom', 'maxClusterRadius', 'polygonOptions',
    'singleMarkerMode', 'spiderLegPolylineOptions', 'spiderfyDistanceMultiplier', 'iconCreateFunction'
  ]),

  leafletEvents: Object.freeze([
    // Marker clutster events
    'clusterclick', 'clusterdblclick', 'clustermousedown', 'clustermouseover', 'clustermouseout',
    'clustercontextmenu', 'clusteradd', 'clusterremove', 'animationend', 'spiderfied', 'unspiderfied',
    // Marker events
    'click', 'dblclick', 'mousedown', 'mouseover', 'mouseout',
    'contextmenu', 'dragstart', 'drag', 'dragend', 'move', 'remove', 'add',
    'popupopen', 'popupclose'
  ]),

  createLayer() {
    return this.L.markerClusterGroup(...this.get('requiredOptions'), this.get('options'));
  }
});
