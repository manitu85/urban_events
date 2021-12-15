import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
// import Geocoder from 'react-map-gl-geocoder/dist/index';

export default function EventMap({ evt }) {
	const [viewport, setViewport] = React.useState({
		latitude: 44.8125,
		longitude: 20.4612,
		width: '600px',
		height: '350px',
		zoom: 12,
	});

	return (
		<ReactMapGL
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
			onViewportChange={vp => setViewport(vp)}
			mapStyle='mapbox://styles/manitux/ckx862qa39ood14k5gpjp7nf7'
			{...viewport}
		>
			<Marker
				key={evt.id}
				latitude={viewport.latitude}
				longitude={viewport.longitude}
			>
				<Image src='/images/pin.svg' width={30} height={30} />
			</Marker>
		</ReactMapGL>
	);
}

// TODO: Forward geocoding: get latitude & longitude from evt.address. (in useEffect)
// or simply add lang and lat to events because react-map-gl-geocoder package doesn't work for me.

// ? Example
// Only rerender markers if props.data has changed
// const markers = React.useMemo(() => data.map(
//   city => (
//     <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} >
//       <img src="pin.png" />
//     </Marker>
//   )
// ), [props.data])
