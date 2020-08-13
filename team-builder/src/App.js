import React from 'react';
import Form from './Form'
import styled from 'styled-components'
import nba from './images/nba.png'
import './App.css';

function App() {
  
  return (
    <MainContainer>
      <div className="App">
        <Form />
      </div>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div `
  background: url(${nba});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
`