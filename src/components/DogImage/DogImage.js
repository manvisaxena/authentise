import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    images: {
        width : '80%',
        height: '70%',
        maxWidth: 700,
        maxHeight: 500
    }
  }));
  

export default function ImageView(props) {
    const classes = useStyles();

    const [image, setimage] = useState('');
    const [loading, setloading] = useState(true);
    let nextClicked = props.nextClicked;

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then(res => {
            const details = res.data;
            setimage(details.message);
            setloading(false);
        })
        
    }, [nextClicked])

    return (
        <div>
            {loading && <CircularProgress color="secondary" />}
            {!loading && <img src={image} alt="Italian Trulli" className={classes.images}/>}
        </div>
    )
}
