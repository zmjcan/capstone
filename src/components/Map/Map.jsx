import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.scss";
// import "mapbox-gl/dist/mapbox-gl.css"; // default css would make visibility not shown

mapboxgl.accessToken =
  "pk.eyJ1IjoibXp6enoteiIsImEiOiJjbHgyamI1bXcwaGg2Mmlwa2p5ZmF2anQ4In0.3yrIZDy3PocOX3x3ryzEBA";

// console.log(mapboxgl.accessToken)

const Map = ({ popup_desc, long, lati, zoom }) => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-79.383);
  const [lat, setLat] = useState(43.653);
  // const [zoom] = useState(10);

  // Initialize map when component mounts
  useEffect(() => {
    if (long && lati) {
      setLng(long);
      setLat(lati);
    }
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      // style: 'mapbox://styles/mapbox/streets-v12', // default style
      style: "mapbox://styles/mzzzz-z/clx2ldx0l02c401qpfm9056mp", //customized style for TailFinder
      center: [lng, lat],
      zoom: zoom, // or zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Map onload event
    map.current.on("load", () => {
      // code to force map to fit inside container when it loads
      map.current.resize();
      map.current.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description: popup_desc,
              },
              geometry: {
                type: "Point",
                coordinates: [long, lati],
              },
            },
          ],
        },
      });
      map.current.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#6593A0",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      const coordinatesGeocoder = function (query) {
        // Match anything which looks like
        // decimal degrees coordinate pair.
        const matches = query.match(
            /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
        );
        if (!matches) {
            return null;
        }

        function coordinateFeature(lng, lat) {
            return {
                center: [lng, lat],
                geometry: {
                    type: 'Point',
                    coordinates: [lng, lat]
                },
                place_name: 'Lat: ' + lat + ' Lng: ' + lng,
                place_type: ['coordinate'],
                properties: {},
                type: 'Feature'
            };
        }

        const coord1 = Number(matches[1]);
        const coord2 = Number(matches[2]);
        const geocodes = [];

        if (coord1 < -90 || coord1 > 90) {
            // must be lng, lat
            geocodes.push(coordinateFeature(coord1, coord2));
        }

        if (coord2 < -90 || coord2 > 90) {
            // must be lat, lng
            geocodes.push(coordinateFeature(coord2, coord1));
        }

        if (geocodes.length === 0) {
            // else could be either lng, lat or lat, lng
            geocodes.push(coordinateFeature(coord1, coord2));
            geocodes.push(coordinateFeature(coord2, coord1));
        }

        return geocodes;}


      // map.current.addControl(
      //   new MapboxGeocoder({
      //       accessToken: mapboxgl.accessToken,
      //       localGeocoder: coordinatesGeocoder,
      //       zoom: 4,
      //       placeholder: 'Try: -40, 170',
      //       mapboxgl: mapboxgl,
      //       reverseGeocode: true
      //   }))


      // declare a popup, but not added to map yet.

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.current.on("mouseenter", "places", (e) => {
        // Change the cursor style as a UI indicator.
        map.current.getCanvas().style.cursor = "pointer";

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        // console.log("popup here");
        // console.log(coordinates);

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // populate the popup and set its coordinates
        // based on the feature found.
        // add popup to map
        popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
      });

      map.current.on("mouseleave", "places", () => {
        map.current.getCanvas().style.cursor = "";
        popup.remove();
      });
    });

    // Clean up on unmount
    return () => map.current.remove();
  }, [lat, lng, zoom]);

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
};

export default Map;
