import MarkerClusterLayer from '../components/marker-cluster-layer';

export function initialize(appInstance) {
  let emberLeafletService = appInstance.lookup('service:ember-leaflet');

  if (emberLeafletService) {
    emberLeafletService.registerComponent('marker-cluster-layer', {
      as: 'marker-cluster',
      component: MarkerClusterLayer,
    });
  }
}

export default {
  initialize,
};
