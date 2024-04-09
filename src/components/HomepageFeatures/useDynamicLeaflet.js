// useDynamicLeaflet.js
import { useEffect, useState } from 'react';

const useDynamicLeaflet = () => {
    const [leaflet, setLeaflet] = useState({
        MapContainer: null,
        TileLayer: null,
        Marker: null,
        Popup: null,
        icon: "https://i.ibb.co/MDKqTNx/image.png",
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Dynamically import the Leaflet components and L object
            Promise.all([
                import('react-leaflet'),
                import('leaflet/dist/leaflet.css'), // This import is side-effectful. Webpack will split this into a separate chunk.
                import('leaflet'),
            ]).then(([reactLeaflet, _, L]) => {
                const icon = new L.Icon({
                    iconUrl: "https://i.ibb.co/MDKqTNx/image.png",
                    iconRetinaUrl: "https://i.ibb.co/MDKqTNx/image.png",
                    iconAnchor: [20, 40],
                    popupAnchor: [0, -40],
                    iconSize: new L.Point(40, 40),
                });

                setLeaflet({
                    MapContainer: reactLeaflet.MapContainer,
                    TileLayer: reactLeaflet.TileLayer,
                    Marker: reactLeaflet.Marker,
                    Popup: reactLeaflet.Popup,
                    icon,
                });
            });
        }
    }, []);

    return leaflet;
};

export default useDynamicLeaflet;
