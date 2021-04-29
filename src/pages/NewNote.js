import { Button, FormGroup, FormLabel, TextField } from '@material-ui/core';
import React from 'react';

export default function NewNote() {
  return (
    <div>
      <form style={{ padding: 20 }}>
        <FormGroup>
          <TextField
            id='outlined-multiline-static'
            label='Notes'
            multiline
            rows={4}
            defaultValue='Type your notes here...'
            variant='outlined'
          />
        </FormGroup>
        <br />
        <FormGroup>
          <FormLabel>Attachment</FormLabel>
          <TextField type='file' />
        </FormGroup>
        <br />
        <Button variant='contained' color='primary' fullWidth>
          Create
        </Button>
      </form>
    </div>
  );
}
