import Auth from '@aws-amplify/auth';
import { Button, FormGroup, FormLabel, TextField } from '@material-ui/core';
import React from 'react';
import { useNotesContext } from '../libs/contextLib';

export default function Signup() {
  // const { setIsauthenticated } = useNotesContext();
  const [email, setemail] = React.useState('');
  const [pwd, setpwd] = React.useState('');
  const [confirmpwd, setconfirmpwd] = React.useState('');
  const [code, setcode] = React.useState('');
  const { handlesignup, isconfirmuser, handleconfirm } = useNotesContext();

  const handleemail = (e) => setemail(e.target.value);
  const handlepwd = (e) => setpwd(e.target.value);
  const handleconfirmpwd = (e) => setconfirmpwd(e.target.value);
  const handlecode = (e) => setcode(e.target.value);

  const validateform = () => {
    return email.length > 0 && pwd.length > 0 && pwd === confirmpwd;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    handlesignup(email, pwd);
  };

  const handleconfirmation = async (e) => {
    e.preventDefault();
    handleconfirm(email, code, pwd);
  };

  function signupform() {
    return (
      (
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
            <FormGroup>
              <FormLabel>Confirm Password</FormLabel>
              <TextField
                type='password'
                value={confirmpwd}
                onChange={handleconfirmpwd}
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
    )
    );
  }

  function confirmsignupform() {
    return (
      <form
        onSubmit={handleconfirmation}
        style={{ width: '40vh', minWidth: 300 }}
      >
        <FormGroup>
          <FormLabel>Confirmation Code</FormLabel>
          <TextField
            value={code}
            onChange={handlecode}
            autoFocus
            variant='outlined'
          />
          <br />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={code.length <= 0}
          >
            Verify
          </Button>
        </FormGroup>
      </form>
    );
  }

  return <div>{!isconfirmuser ? signupform():confirmsignupform()}</div>;
}
