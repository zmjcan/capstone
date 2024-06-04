import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./PetMap.scss";

const position = [43.653, -79.383] //toronto longitude and latitude, default position // can be updated in future as per user IP city


export default function PetMap() {
  return (
    <>
      <h2>PetMap</h2>
      <div className="leaflet-container">
        <MapContainer className="leaflet-container" center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              I am a popup marker
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
