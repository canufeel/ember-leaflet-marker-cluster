import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import MarkerClusterLayerComponent from 'ember-leaflet-marker-cluster/components/marker-cluster-layer';
import locations from '../../helpers/locations';
/* global L */

// Needed to silence leaflet autodetection error
L.Icon.Default.imagePath = 'some-path';

let cluster;

module('Integration | Component | marker cluster layer', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register(
      'component:marker-cluster-layer',
      class extends MarkerClusterLayerComponent {
        constructor() {
          super(...arguments);
          cluster = this;
        }
      }
    );

    this.set('center', locations.nyc);
    this.set('zoom', 13);
  });

  test('it renders', async function (assert) {
    this.set('markerCenter', locations.nyc);
    this.set('icon', L.divIcon({ className: 'my-div-icon' }));

    // this maxZoom property here is for purpose. Otherwise
    // Leaflet.markercluster causes some weird behaviour on addlayer.
    await render(hbs`
      <LeafletMap @zoom={{zoom}} @center={{center}} @maxZoom={{25}} as |layers|>
        <layers.marker-cluster as |cluster|>
          <cluster.marker @location={{markerCenter}} @icon={{icon}} />
        </layers.marker-cluster>
      </LeafletMap>
    `);

    assert.equal(cluster.childComponents.length, 1);
  });

  test('test leaflet marker cluster options are set on marker cluster layer', async function (assert) {
    this.set('markerCenter', locations.nyc);
    this.set('icon', L.divIcon({ className: 'my-div-icon' }));

    // this maxZoom property here is for purpose. Otherwise
    // Leaflet.markercluster causes some weird behaviour on addlayer.
    await render(hbs`
      <LeafletMap @zoom={{zoom}} @center={{center}} @maxZoom={{25}} as |layers|>
        <layers.marker-cluster @maxClusterRadius={{100}} as |cluster|>
          <cluster.marker @location={{markerCenter}} @icon={{icon}} />
        </layers.marker-cluster>
      </LeafletMap>
    `);

    assert.equal(cluster._layer.options.maxClusterRadius, 100);
  });
});
