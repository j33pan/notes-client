import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

export default function NavBar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <ButtonBase>
              <Typography>ATN</Typography>
            </ButtonBase>
          </Box>
          <Button style={{ color: 'inherit' }}>Signup</Button>
          <Button style={{ color: 'inherit' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
