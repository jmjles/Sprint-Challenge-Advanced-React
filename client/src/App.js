import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList'
import { Container, Button } from '@material-ui/core';
import useDarkMode from './hooks/useDarkMode';

function App() {

  const [darkMode,setDarkMode] = useDarkMode(false)
  const handleClick = () => setDarkMode(!darkMode)
  return (
    <Container maxWidth='lg'>
      <Button variant='contained' color='primary' onClick={handleClick}>Dark Mode</Button>
      <PlayerList/>
    </Container>
  );
}

export default App;
