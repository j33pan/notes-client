import React from 'react';
import NavBar from './components/NavBar';
import Routes from './Routes';
import { NotesContext } from './libs/contextLib';
export default function App() {
  const [isauthenticated, setIsauthenticated] = React.useState(false);
  
  return (
    <div>
      <NotesContext.Provider value={{isauthenticated, setIsauthenticated}}>
          <NavBar />
          {isauthenticated?'logged in':'not logged in'}
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
      </NotesContext.Provider>
    </div>
  );
}
