import React from 'react';
import NavBar from './components/NavBar';
import Routes from './Routes';
import { NotesContext } from './libs/contextLib';
import { Button } from '@material-ui/core';
import Auth from '@aws-amplify/auth';
export default function App() {
  const [isauthenticated, setIsauthenticated] = React.useState(false);
  
  const handleclick = () => {
    Auth.currentSession()
      .then((x) => console.log(x))
      .catch((e) => alert(e.message));
  };

  return (
    <div>
      <NotesContext.Provider value={{ isauthenticated, setIsauthenticated }}>
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
          <Button onClick={handleclick} variant='contained'>
                Check Status
          </Button>
        </div>
      </NotesContext.Provider>
    </div>
  );
}
