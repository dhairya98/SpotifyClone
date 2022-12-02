export const initialstate={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // Remove after dev of project
    // token:'BQBmlMHywNTz_ZJvIoI2THtt9zm_SrTXoYuaTF7CvmTeCran55xYFakhGUKoDvC7SY5Sys1E7EFHjETiJy7aFWc4hGMCwkb17NIE3_EiYBmKY8ezMkis02vG6lQfJhsV5_RFbhjs77OWVLQrI7G_uKCSSvaa_ySxRvzxCDHMexYZJW2g6c3N1UsxRyG7YGSUpOmI5xXQ66vMgFyN',
    playlists:null
}

// What action??
const reducer=(state, action)=>{
    console.log(action)
    //Action--> type, [payload]
    switch(action.type){
        // see app.js
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state
    }
}

export default reducer