import { Button, FormGroup, FormLabel, TextField, Typography } from '@material-ui/core';
import React from 'react';

export default function Login() {
    const [email, setemail] = React.useState('');
    const [pwd, setpwd] = React.useState('');

    const handleemail = (e) => setemail(e.target.value);
    const handlepwd = (e) => setpwd(e.target.value);

    const validateform = () => {
      return email.length > 0 && pwd.length > 0;
    };

    const handlesubmit = (e) => {
      e.preventDefault();
    };

  return (
    <div>
      <div style={{}}>
        <form onSubmit={handlesubmit} noValidate>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <TextField
              type='email'
              value={email}
              onChange={handleemail}
              autoFocus
              variant='outlined'
            />
          </FormGroup>
          <br />
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <TextField
              type='password'
              value={pwd}
              onChange={handlepwd}
              variant='outlined'
            />
          </FormGroup>
          <br />
          <Button
                     type='submit'
                              disabled={!validateform()}
            variant='contained'
                     color='primary'
                              fullWidth
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
