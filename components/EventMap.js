import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import Image from 'next/image';
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
// import Geocoder from 'react-map-gl-geocode/dist/index';

export default function EventMap({ evt }) {
	const [viewport, setViewport] = useState({
		latitude: evt.lat,
		longitude: evt.long,
		width: '600px',
		height: '350px',
		zoom: 12,
	});

	// console.log("location", viewport.latitude, viewport.longitude);

	return (
		<ReactMapGL
			{...viewport}
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
			onViewportChange={vp => setViewport(vp)}
			mapStyle='mapbox://styles/manitux/ckx862qa39ood14k5gpjp7nf7'
		>
			<Marker
				key={evt.id}
				latitude={viewport.latitude}
				longitude={viewport.longitude}
			>
				<Image src='/images/pin.svg' alt='pin' width={30} height={30} />
			</Marker>
		</ReactMapGL>
	);
}

// TODO: Forward geocoding: get latitude & longitude from evt.address (useEffect)

// ? Example
// Only rerender markers if props.data has changed
// const markers = useMemo(() => data.map(
//   city => (
//     <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} >
//       <img src="pin.png" />
//     </Marker>
//   )
// ), [props.data])

// Belgrade
// latitude: 44.8125,
// longitude: 20.4612,
