import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
// import {spotify} from './spotify'


const spotify=new SpotifyWebApi()

function App() {
  // const [token, setToken]=useState(null)
  const [{user, token},dispatch]= useDataLayerValue()
// Use user from data layer
  useEffect(()=>{
    const hash=getTokenFromUrl()
    window.location.hash=''
    const _token=hash.access_token //predefined

    if (_token){

      dispatch({
        type:'SET_TOKEN',
        token:_token
      })
      // setToken(_token)
      
      spotify.setAccessToken(_token)
      //this is giving access to react for spotify react context API, COnnecting Spotify to react
      spotify.getMe().then(user=>{
        dispatch({
          type: 'SET_USER',
          user:user
  
        })
        console.log('👱 ',user )
        
      }) // get user account (promise)
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists
        })
      })
      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response=>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
    }
    // used token to return user details from promise

    // console.log('Token is ', token)
  },[])

        console.log('👾 ',token )
  return (
    <div className="App">
      {
        token?<Player spotify={spotify}/>:<Login/>
      }
      {/* Spotify Logo */}
      {/* Login with Spotify Button */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
