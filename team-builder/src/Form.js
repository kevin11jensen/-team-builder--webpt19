import React, { useState } from 'react';


export default function Form() {
    const [state, setState] = useState({ name: '', number: '', position: '', scouting: '' })
    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(state.name)
        console.log(state.number)
        console.log(state.position)
        console.log(state.scouting)
    }
    {console.log(state)}
    return (
        
        <form
            onSubmit = {e => handleSubmit(e)}
            
        >
            <label htmlFor = 'name'>
                <input
                name = 'name'
                id = 'name'
                value = {state.name}
                onChange = {e => handleChange(e)}
                placeholder = 'player name'
                required
                />
            </label>
            <label htmlFor = 'number'>
                <input
                name = 'number'
                id = 'number'
                value = {state.number}
                onChange = {e => handleChange(e)}
                placeholder = 'player number'
                required
                />
            </label>
            <label htmlFor = 'position'>
                <select
                name = 'position'
                id = 'position'
                value = {state.position}
                onChange = {e => handleChange(e)}
                required
                >
                    <option value = 'PG'>PG</option>
                    <option value = 'SG'>SG</option>
                    <option value = 'SF'>SF</option>
                    <option value = 'PF'>PF</option>
                    <option value = 'C'>C</option>
                </select>
            </label>
            <textarea
            name = 'scouting'
            placeholder = 'player scouting'
            cols = '29'
            rows = '9'
            maxLength = '250'
            value = {state.scouting}
            onChange = {e => handleChange(e)}
            />
            <button type = 'submit'>Submit</button>
        </form>
    );
}


