import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import { Button } from '@material-ui/core';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Охрана</Title>
      <Button>Включить охрану</Button>
      <Button>Выключить охрану</Button>
    </React.Fragment >
  );
}
