import React, {useContext} from 'react'
import {Link} from 'react-router-dom'; 
import {FlightListContext} from '../contexts/FlightContext'

function Navbar() {
    const {flights} = useContext(FlightListContext)

    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to ='/Squadron'>
                    <li className='link'>Squadron</li>
                </Link>
                <Link to="/PhotoGallery">
                     <li className='link'>Photo Gallery</li>
                </Link>
                <Link to='/FlightLog'>
                     <li className='link'>Flight Log</li>
                </Link>
            </ul>
              <h3 className='nav-flight-stat'>
                    Flights: {flights.length}
                </h3>
            <h3 className='nav-flight-kills'>
                Kills: {
                flights.reduce((killTotal, currentFLight) => {
                    killTotal += currentFLight.kills
                    return killTotal
                }, 0)
                }
            </h3>
            <h3 className='nav-flight-losses'>
                Losses: {
                    flights.reduce((lossTotal, currentFlight) => {
                        lossTotal += currentFlight.losses
                        return lossTotal
                    }, 0)
                }
            </h3>
        </nav>
    )
}

export default Navbar
