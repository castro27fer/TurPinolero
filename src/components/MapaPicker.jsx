import { useState } from 'react';
import MapPicker from 'react-google-map-picker';
import { DEFAULT_LATITUD, DEFAULT_LONGITUD, GOOGLE_MAP_KEY } from '../data';

const DefaultLocation = { lat: DEFAULT_LATITUD, lng: DEFAULT_LONGITUD }; // Metrocentro Managua
const DefaultZoom = 10;

export const MapaPicker = ({ height = '300px' }) => {
	const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

	const [location, setLocation] = useState(defaultLocation);
	const [zoom, setZoom] = useState(DefaultZoom);

	function handleChangeLocation(lat, lng) {
		setLocation({ lat: lat, lng: lng });
		console.log({ lat, lng });
	}

	function handleChangeZoom(newZoom) {
		console.log(`Zoom: ${newZoom}`);
		setZoom(newZoom);
	}

	//   function handleResetLocation() {
	//     setDefaultLocation({ ...DefaultLocation });
	//     setZoom(DefaultZoom);
	//   }

	return (
		<>
			{/* <button onClick={handleResetLocation}>Reset Location</button>
      <label>Latitute:</label>
      <input type="text" value={location.lat} disabled />
      <label>Longitute:</label>
      <input type="text" value={location.lng} disabled />
      <label>Zoom:</label>
      <input type="text" value={zoom} disabled /> */}

			<MapPicker
				defaultLocation={defaultLocation}
				mapTypeId="roadmap"
				style={{ height: height }}
				onChangeLocation={handleChangeLocation}
				onChangeZoom={handleChangeZoom}
				zoom={zoom}
				apiKey={GOOGLE_MAP_KEY}
			/>
		</>
	);
};
