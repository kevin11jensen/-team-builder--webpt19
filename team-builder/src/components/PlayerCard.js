import React from 'react'
import styled from 'styled-components'


export const PlayerCard = (props) => {
    console.log('playerCard props:', props)
    return (
        <CardContainer>
            <h3>{props.playerCard[0].name}</h3>
            <h4>#: {props.playerCard[0].number}</h4>
            <h5>Pos: {props.playerCard[0].position}</h5>
            <p>Scouting Report: {props.playerCard[0].scouting}</p>
        </CardContainer>
    )
}

const CardContainer = styled.div `
    font-size: 1.6rem;
    background-color: white;
    width: 22vw;
    height: 22rem;
    margin: 1%;
    padding: 1%;
    border-radius: .5rem;
    h1 {
        color: black;
    }
`