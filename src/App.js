import React from 'react';
import NavBar from './components/NavBar';
import Routes from './Routes';
import { NotesContext } from './libs/contextLib';
import Auth from '@aws-amplify/auth';
import { useHistory } from 'react-router';
import Loading from './components/Loading';
import { handleErr } from './libs/errLib';

export default function App() {
  const [isgettingsession, setIsgettingsession] = React.useState(true);
  const [isauthenticated, setIsauthenticated] = React.useState(false);
  const [isloading, setIsloading] = React.useState(false);
  const history = useHistory();
  const [isconfirmuser, setIsconfirmuser] = React.useState(false);

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
      handleErr(error);
    }
    setIsloading(false);
  };

  const handlesignup = async (email, pwd) => {
    setIsloading(true);
    try {
      const newuser = await Auth.signUp({ username: email, password: pwd });
      console.log(newuser);
      setIsconfirmuser(true);
    } catch (error) {
      handleErr(error);
    }
    setIsloading(false);
  };

  const handleconfirm = async (email, code, pwd) => {
    setIsloading(true);
    try {
      await Auth.confirmSignUp(email, code);
      await Auth.signIn(email, pwd);
      setIsauthenticated(true);
      history.push('/');
    } catch (error) {
      handleErr(error);
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
            handlesignup,
            isconfirmuser,
            handleconfirm,
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
