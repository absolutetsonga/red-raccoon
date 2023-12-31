import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

type MapProps = {
  containerStyle: {
    width: string;
    height: string;
  };
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map({ containerStyle }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
