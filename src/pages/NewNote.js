import { Button, FormGroup, FormLabel, TextField } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

export default function NewNote() {
    const history = useHistory();
    const [content, setContent] = React.useState('');
    const file = React.useRef(null);
    const handleContent = (e) => setContent(e.target.value);
    const handleFile = (e) => (file.current = e.target.files[0]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(file.current.name);
    };

  return (
    <div>
      <form 
      onSubmit={handleSubmit} 
      style={{ 
          padding: 20, 
          width: '60vw', 
          minWidth: 300 
          }}>
        <FormGroup>
          <TextField
            value={content}
            onChange={handleContent}
            id='outlined-multiline-static'
            label='Notes'
            multiline
            rows={4}
            variant='outlined'
          />
        </FormGroup>
        <br />
        <FormGroup>
          <FormLabel>Attachment</FormLabel>
          <TextField onChange={handleFile} type='file' />
        </FormGroup>
        <br />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Create
        </Button>
      </form>
    </div>
  );
}
