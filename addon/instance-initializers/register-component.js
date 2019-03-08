export function initialize(appInstance) {
  let emberLeafletService = appInstance.lookup('service:ember-leaflet');

  if (emberLeafletService) {
    emberLeafletService.registerComponent('marker-cluster-layer', { as: 'marker-cluster' });
  }
}

export default {
  initialize
};
