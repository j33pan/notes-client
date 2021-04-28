import React from 'react';
import NavBar from './components/NavBar';
import Routes from './Routes';
import { NotesContext } from './libs/contextLib';
import { Button } from '@material-ui/core';
import Auth from '@aws-amplify/auth';
import { useHistory } from 'react-router';
import Loading from './components/Loading';
export default function App() {
  const [isgettingsession, setIsgettingsession] = React.useState(true);
  const [isauthenticated, setIsauthenticated] = React.useState(false);
  const [isloading, setIsloading] = React.useState(false);
  const history = useHistory();

  const handleclick = () => setIsloading(!isloading);

  const getsession = async () => {
    try {
      await Auth.currentSession();
      setIsauthenticated(true);
    } catch (error) {
      if (error !== 'No current user') alert(error);
    }
    setIsgettingsession(false);
  };

  const handlelogout = async () => {
    await Auth.signOut();
    setIsauthenticated(false);
    history.push('/login');
  };

  const handlelogin = async (email, pwd) => {
    setIsloading(true);
    try {
      const response = await Auth.signIn(email, pwd);
      setIsauthenticated(true);
      history.push('/');
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
    setIsloading(false);
  };

  React.useEffect(() => {
    getsession();
  }, []);

  return (
    !isgettingsession && (
      <div>
        <NotesContext.Provider
          value={{
            isauthenticated,
            setIsauthenticated,
            handlelogout,
            handlelogin,
          }}
        >
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
          <Loading start={isloading} />
        </NotesContext.Provider>
      </div>
    )
  );
}
