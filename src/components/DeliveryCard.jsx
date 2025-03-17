import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaTruck } from 'react-icons/fa';
import L from 'leaflet';

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MoveMap = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([location.lat, location.lng], 13, { animate: true });
  }, [location, map]);
  return null;
};

const DeliveryCard = () => {
  const [location, setLocation] = useState({ lat: 50.4501, lng: 30.5234 }); // Default: Kyiv
  const [userLocated, setUserLocated] = useState(false);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(newLocation);
          setUserLocated(true);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setError('Location access denied. Using default location (Kyiv).');
        }
      );
    } else {
      setError('Geolocation is not supported in this browser.');
    }
  }, []);

  return (
    <div className="p-4  rounded-2xl w-full bg-white">
      <h2 className="text-lg font-semibold mb-2">Delivery</h2>
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.lat, location.lng]} icon={customIcon}>
            <Popup>
              {userLocated ? 'You are here!' : 'Default location: Kyiv'}
            </Popup>
          </Marker>
          <MoveMap location={location} />
        </MapContainer>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <FaTruck size={20} />
          <span className="text-sm">Courier Delivery</span>
        </div>
        <span className="text-sm font-medium">$4.99</span>
      </div>
    </div>
  );
};

export default DeliveryCard;
