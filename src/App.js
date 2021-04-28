import React from 'react';
import NavBar from './components/NavBar';
import Routes from './Routes';
import { NotesContext } from './libs/contextLib';
import { Button } from '@material-ui/core';
import Auth from '@aws-amplify/auth';
import { useHistory } from 'react-router';
export default function App() {
  const [isgettingsession, setIsgettingsession] = React.useState(true);
  const [isauthenticated, setIsauthenticated] = React.useState(false);
  
  const handleclick = () => {
    Auth.currentSession()
      .then((x) => console.log(x))
      .catch((e) => alert(e.message));
  };

  const getsession = async () => {
    try {
      await Auth.currentSession();
      setIsauthenticated(true);
    } catch (error) {
      if (error !== 'No current user') alert(error);
    }
    setIsgettingsession(false);
  };

  const history = useHistory();
  const handlelogout = async () => {
    await Auth.signOut();
    setIsauthenticated(false);
    history.push('/login');
  }

  React.useEffect(() => {
    getsession();
  }, []);

  return (
    !isgettingsession && (
      <div>
        <NotesContext.Provider value={{ isauthenticated, setIsauthenticated, handlelogout }}>
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
    )
  );
}
