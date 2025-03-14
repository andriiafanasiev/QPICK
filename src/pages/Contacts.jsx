import { React, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
// Custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Contacts() {
  const location = { lat: 40.748817, lng: -73.985428 };

  const mapRef = useRef(null);
  return (
    <div className="flex flex-col max-w-[900px] mx-auto pl-[5px] pr-[5px] mt-[22px]">
      <div className="flex flex-col w-[80%] items-start rounded-lg shadow-primary-shadow p-4 pb-12 pt-6  relative bg-white">
        <h4 className="text-[17px] font-semibold mb-2">Our office</h4>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.lat, location.lng]} icon={customIcon}>
              <Popup>{' Our office in location: New York'}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="text-[#1C1C27] mt-6 text-[17px] flex flex-row gap-2 items-center font-semibold  ">
          <FaMapMarkerAlt />
          <p>350 5th Ave, New York, NY 10118, USA</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
