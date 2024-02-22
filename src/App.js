// App.js
import React from 'react';
import { AppBar, Tabs, Tab, Container } from '@mui/material';
import TabComponent from './components/TabComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Tabs>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Services" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      <Container>
        <TabComponent />
      </Container>
    </div>
  );
}

export default App;
