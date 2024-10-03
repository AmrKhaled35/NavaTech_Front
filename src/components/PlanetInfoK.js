import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './PlanetInfoK.css';

const PlanetInfoC = ({ children }) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfoBox = () => {
        setShowInfo(!showInfo);
    };
    

    return (
        <div className="planet-info-container">
            <button className="info-button" onClick={toggleInfoBox}>
                <FontAwesomeIcon icon={faInfoCircle} />
            </button>
            <div className={`info-box ${showInfo ? 'show' : ''}`}>
                <h2>Kepler-22 b</h2>
                <p>Planet Radius: 2.1 x Earth</p>
                <p>Planet Type: Super Earth</p>
                <p>Discovery Method: Transit</p>
                <p>Planet Mass: 9.1 Earths</p>
                <p>Discovery Date: 2011</p>
                <p>Orbital Radius: 0.812 AU</p>
                <p>Orbital Period: 289.9 days</p>
                <p>Eccentricity: 0.72</p>
            </div>
            <div style={{ background: 'black' }}>
                {children}
            </div>
        </div>
    );
};

export default PlanetInfoC;
