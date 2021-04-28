import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';

export default function Loading(props) {
  const { start } = props;
  return (
    <div>
      <Backdrop open={start} style={{ zIndex: 99999 }}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
