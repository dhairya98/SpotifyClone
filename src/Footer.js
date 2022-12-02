import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
    <div className="footer__left">
      <img className='footer__albumLogo' src='https://upload.wikimedia.org/wikipedia/en/d/da/Avicii_Wake_Me_Up_Official_Single_Cover.png?20131005155944' alt=''/>
      <div className="footer__songInfo">
        <h4>Wake Me Up!</h4>
        <p>Avicii</p>
      </div>
    </div>
    <div className="footer__center">
      <ShuffleIcon className='footer__green'/>
      <SkipPreviousIcon className='footer__icon'/>
      <PlayCircleOutlineIcon className='large' fontSize='large'/>
      <SkipNextIcon className='footer__icon'/>
      <RepeatIcon className='footer__green'/>
      
    </div>
    <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlay />
        </Grid>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default Footer