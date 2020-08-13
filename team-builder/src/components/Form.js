import React, { useState } from 'react';
import styled from 'styled-components'

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
        <FormContainer>
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
        </FormContainer>
    );
}

const FormContainer = styled.div `

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 3%;
        label {
            margin: 1% 0;
            input {
                padding: 3%;
                font-size: 1.4rem;
                border-radius: .5rem;
            }
            select {
                padding: 1%;
                font-size: 1.6rem;
                border-radius: .5rem;
            }
        }
        textarea{
            font-size: 1rem;
            padding: 1%;
            border-radius: .5rem;
        }
        button {
            background: transparent;
            color: white;
            padding: 2rem 5rem;
            border: 2px solid white;
            margin-top: 2%;
            font-size: 1.6rem;
            transition: .5s;
            &:hover {
                background: rgb(255, 255, 255, .5);
                cursor: pointer;
            }
        }
    }
`
