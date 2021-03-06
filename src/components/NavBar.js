import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useNotesContext } from '../libs/contextLib';

export default function NavBar() {
  const history = useHistory();
  const handlelink = (url) => history.push(url);
  const { isauthenticated, handlelogout } = useNotesContext();
  return (
    <div>
      <AppBar position='fixed' elevation={0}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <ButtonBase onClick={() => handlelink('/')}>
              <Typography>ATN</Typography>
            </ButtonBase>
          </Box>
          {isauthenticated ? (
            <>
              <Button onClick={handlelogout} style={{ color: 'inherit' }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => handlelink('/signup')}
                style={{ color: 'inherit' }}
              >
                Signup
              </Button>
              <Button
                style={{ color: 'inherit' }}
                onClick={() => handlelink('/login')}
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar style={{ marginBottom: 20 }} />
    </div>
  );
}
