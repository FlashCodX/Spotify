import React, {useEffect} from "react";
import {useDataValue} from "./Data/DataProvider";
import {getToken} from "./Spotify/spotify";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import Choice from "./Pages/Choice/Choice";
import Home from "./Pages/Home/Home";

export default function App() {
    const [{token}, dispatch] = useDataValue();
    let _token = null

    function getUserData() {
        const getTopTracks = 'https://api.spotify.com/v1/me/player/recently-played?type=track&limit=50'
        const getUser = 'https://api.spotify.com/v1/me'
        const getTopArtists = 'https://api.spotify.com/v1/me/top/artists'
        const getUserPlaylists = 'https://api.spotify.com/v1/me/playlists'
        const headers = {
            headers: {
                Authorization: "Bearer " + _token
            }
        };


        fetch(getUser, headers).then((result) => {
            if (result.status !== 200) {
                localStorage.clear()
                window.location.reload()
            }else {
                result.json().then((data)=>{
                    dispatch({
                        type: "SET_USER",
                        user:data,
                    });
                })
            }

        })

        fetch(getUser, headers)
            .then(res => res.json()).catch(()=>{
            localStorage.clear()
            window.location.reload()

        })
            .then((data)=>{
                dispatch({
                    type: "SET_USER",
                    user:data,
                });
            });

        fetch(getTopArtists, headers)
            .then(res => res.json())
            .then((data)=>{
                dispatch({
                    type: "SET_ARTISTS",
                    artists: data.items,
                });
            });
        fetch(getUserPlaylists, headers)
            .then(res => res.json())
            .then((data)=>{
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: data.items,
                });
            });
        fetch(getTopTracks, headers)
            .then(res => res.json())
            .then((data)=>{
                let available = []
                data.items.forEach((track) => {
                    if (track.track.preview_url) available.push(track.track)
                })

                dispatch({
                    type: "SET_TOP_TRACKS",
                    top_tracks: available,
                })
            });

    }

    useEffect(() => {


        const inStorageToken = localStorage.getItem('s_token')
        if (inStorageToken) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            _token = inStorageToken
            dispatch({
                type: "SET_TOKEN",
                token: inStorageToken,
            });
            getUserData()
        } else {
            const hash = getToken();
            if (hash['access_token']) {
                _token = hash['access_token']
                localStorage.setItem('s_token', _token)
                dispatch({
                    type: "SET_TOKEN",
                    token: _token
                });
                window.location.hash = "";
            }
        }
    }, [token, dispatch]);

    return (
        <main>
            <SplashScreen/>
            {token ? <Home/> : <Choice/>}
        </main>
    );
}

