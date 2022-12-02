// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint='https://accounts.spotify.com/authorize'
//using spotify auth--> telling spotify to take care

const redirectUri='http://localhost:3000/'
// redirect to home page once logged in

// Steps:-
// 1. Click LOGIN --> Redirect to spotify login page --> Redirect to home page oonce logged in

const clientId='f2182452f5f24327af108bced59ba35b'

const scopes=[
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
        // #"-->accessToken=sdcjdcjd<--"&name=dhairya
        let parts=item.split('=')
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{})
}

// show them scopes listed out using API (dont allow user to delete anything, just do those what listed above)
export const loginUrl=`${authEndpoint}
?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`