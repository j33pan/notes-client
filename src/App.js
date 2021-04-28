import React from 'react';
import NavBar from './components/NavBar';
import Routes from './Routes';

export default function App() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        <Routes />
      </div>
    </div>
  );
}
