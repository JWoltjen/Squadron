import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'; 
import {FlightListContext} from '../contexts/FlightContext'
import DropdownMenu from './DropdownMenu'

function Navbar() {
    const {flights} = useContext(FlightListContext)
    const [kills, setKills] = useState( flights ? flights.reduce((killTotal, currentFlight) => {
                    killTotal += Number(currentFlight.kills)
                    console.log(flights)
                    return killTotal
                }, 0) : 0)

    const [losses, setLosses] = useState(flights ? flights.reduce((lossTotal, currentFlight) => {
                        lossTotal += Number(currentFlight.losses)
                        return lossTotal
                    }, 0) : 0)
    
    return (
        <nav>
            <h3 className="logo">=Squadron= </h3>
            <ul className='links'>
                <Link to ='/Home'>
                    <li className='link'>Home</li>
                </Link>
                <Link to ='/Squadron'>
                    <li className='link'>Squadron</li>
                </Link>
                <Link to="/PhotoGallery">
                     <li className='link'>Photo Gallery</li>
                </Link>
                <Link to='/FlightLog'>
                     <li className='link'>Flight Log</li>
                </Link>
                    <li className='link'>Flights: {flights.length}</li>
                    <li className='link'> Kills: {kills}</li>
                    <li className='link'> Losses: {losses}</li>
            </ul>
            <DropdownMenu/>
        </nav>
    )
}

export default Navbar
