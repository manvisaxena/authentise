import React from 'react';

import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';

import DogImage from './../../components/DogImage/DogImage';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageView: {
    backgroundColor: '#FFFFFF',
    height: '50%',
    width:'50%',
    maxWidth: 700,
    maxHeight: 500,
    margin: 10,
    padding: 5
  },
  nextIcon: {
    position: 'fixed',
    right: 500,
    top: 200,
    float: 'right'
  }
}));

function ImageViewPage() {
  const classes = useStyles();

  const [nextClicked, setnextClicked] = useState(false);

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dog Images
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.mainView}>
        <Box 
          boxShadow={2}
          className={classes.imageView}
        > 
          <DogImage nextClicked={nextClicked} />
        
        </Box>
        
        <div >
          <Tooltip title="Next Image">
            <IconButton aria-label="Next Image" onClick={()=> setnextClicked(nextClicked => !nextClicked)} >
              <PetsIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      
      


    </div>
  );
}


export default ImageViewPage;