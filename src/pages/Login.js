import { Button, FormGroup, FormLabel, TextField, Typography } from '@material-ui/core';
import React from 'react';

export default function Login() {

    const handlesubmit = (e) => {
      e.preventDefault();
    };

  return (
    <div>
      <div style={{ }}>
        <form onSubmit={handlesubmit}>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <TextField type='email' variant='outlined' />
          </FormGroup>
          <br />
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <TextField type='password' variant='outlined' />
          </FormGroup>
          <br />
          <Button type='submit' variant='contained' color='primary' fullWidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
