import { Button, FormGroup, FormLabel, TextField, Typography } from '@material-ui/core';
import React from 'react';

export default function Login() {
  return (
    <div>
      <div style={{ padding:100 }}>
        <form>
            <FormGroup>
                <FormLabel>Email</FormLabel>
                <TextField variant='outlined' />
            </FormGroup>
        <br />
            <FormGroup>
                <FormLabel>Password</FormLabel>
                <TextField variant='outlined' />
            </FormGroup>
            <br />
            <Button variant='contained' color='primary' fullWidth>Login</Button>
        </form>
      </div>
    </div>
  );
}
