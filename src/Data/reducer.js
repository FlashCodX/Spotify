import {DemoData} from "../DemoData/DemoData";

export const initialState = {
    spotify: null,
    user: null,
    playlists: DemoData.playlists,
    playing: false,
    demo: false,
    top_tracks: DemoData.top_tracks,
    artists: DemoData.top_artists,
    current: 0,
    progress:0,
    timestamp: 0,
    song:{}

}

const reducer = (state, action) => {
    switch (action.type) {

        case 'SET_PROGRESS':
            return {
                ...state,
                progress: action.progress,
            };

        case 'SET_TIMESTAMP':
            return {
                ...state,
                timestamp: action.timestamp,
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };


        case "SET_CURRENT":
            return {
                ...state,
                current: action.current,
            };


        case 'SET_DEMO':
            return {
                ...state,
                demo: action.demo
            }


        case 'SET_ARTISTS':
            return {
                ...state,
                artists: action.artists

            }

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };




        case 'SET_TOP_TRACKS':
            return {
                ...state,
                top_tracks: action.top_tracks,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
};

export default reducer;
