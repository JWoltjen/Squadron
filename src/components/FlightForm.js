import React, {useContext, useEffect, useState} from 'react'

import {FlightListContext} from '../contexts/FlightContext'

function FlightForm() {
    const {addFlight, clearFlight, editItem, editFlight} = useContext(FlightListContext)
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const handleChange = e => {
        setDescription(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault(); 
        if(editItem === null){
            addFlight(description, date)
            setDescription('')
            setDate('')
        } else {
            editFlight(description, editItem.id)
    }
    }; 
    const updateDate = e => {
        setDate(e.target.value)
    }

    useEffect(() => {
        if(editItem !==null){
            setDescription(editItem.description)
            console.log(editItem)
        } else {
            setDescription('')
        }
    }, [editItem]); 

    return (
        <form onSubmit={handleSubmit} className='flight-form'>
            <input className='flight-form-date' type='date' onChange={updateDate}/>
            <input type="text"
            onChange={handleChange}
            value={description}
            className='flight-form-description'
            placeholder='Add description'
            required
        />
            <div className='buttons'>
                <button type='submit' className='btn-add-flight-btn'>Submit</button>
                <button onClick={clearFlight} type='button' className='btn-clear-flight-btn'>Clear</button>
            </div>
        </form>
    )
}; 

export default FlightForm
