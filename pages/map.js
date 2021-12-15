import 'mapbox-gl/dist/mapbox-gl.css';

import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
	const [viewport, setViewport] = React.useState({
		latitude: 44.8125,
		longitude: 20.4612,
		width: '100vw',
		height: '100vh',
		zoom: 12,
	});
	return (
		<div>
			<ReactMapGL
				mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
				onViewportChange={vp => setViewport(vp)}
				mapStyle='mapbox://styles/manitux/ckx85o7ra9o9o14k566odcbg9'
				{...viewport}
			>
				Markers here
			</ReactMapGL>
			;
		</div>
	);
}
