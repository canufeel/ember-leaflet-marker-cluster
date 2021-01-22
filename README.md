# ember-leaflet-marker-cluster

Provides Beautiful Animated Marker Clustering functionality for [Ember-Leaflet](https://miguelcobain.github.io/ember-leaflet/), an Ember Addon for [Leaflet](http://leafletjs.com) interactive maps.

This plugin is based on a JS library [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) and basically wraps it into ember component for usage in HTMLbars templates.

## Installation

```bash
ember install ember-leaflet-marker-cluster
```

## Using the plugin

Please be advised that for some particular reason Leaflet Marker Cluster breaks if the component loads with some markers inside the marker cluster in place without `@maxZoom` argument provided to `<LeafletMap>` like so: `<LeafletMap @maxZoom={{25}}>`.

```hbs
<LeafletMap @lat={{lat}} @lng={{lng}} @zoom={{zoom}} as |layers|>

  <layers.tile @url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"/>

  <layers.marker-cluster as |cluster|>
    {{#each markers as |m|}}
      <cluster.marker @location={{m.location}} as |marker|>
        <marker.popup>
          <h3>{{m.title}}</h3>
          {{m.description}}
        </marker.popup>
      </cluster.marker>
    {{/each}}
  </layers.marker-cluster>

</LeafletMap>
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
