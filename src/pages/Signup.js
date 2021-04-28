import Auth from '@aws-amplify/auth';
import { Button, FormGroup, FormLabel, TextField } from '@material-ui/core';
import React from 'react';
import { useNotesContext } from '../libs/contextLib';

export default function Signup() {
  // const { setIsauthenticated } = useNotesContext();
  const [email, setemail] = React.useState('');
  const [pwd, setpwd] = React.useState('');

  const handleemail = (e) => setemail(e.target.value);
  const handlepwd = (e) => setpwd(e.target.value);

  const validateform = () => {
    return email.length > 0 && pwd.length > 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const newuser = await Auth.signUp({ username: email, password: pwd });
      console.log(newuser);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handlesubmit}
        noValidate
        style={{ width: '40vh', minWidth: 300 }}
      >
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
          Signup
        </Button>
      </form>
    </div>
  );
}