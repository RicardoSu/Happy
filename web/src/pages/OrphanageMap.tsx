import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanageMap() {
    const [orphanages, setOphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOphanages(response.data);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Select an orphanage on the map</h2>
                    <p>Many children are waiting for your visit :&#41;</p>
                </header>
                <footer>
                    <strong className="city" >Florida</strong>
                    <span>Broward County</span>
                </footer>
            </aside>

            <Map
                center={[26.1510431, -80.2919299]}
                zoom={11.5}
                style={{ width: '100%', height: '100%' }}
            >
                {/*<TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                            key = {orphanage.id}
                        >
                            <Popup claseButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                                {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>

                    )
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanageMap;