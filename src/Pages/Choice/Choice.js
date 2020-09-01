import React from 'react'
import './Choice.css'
import Home from "../Home/Home";
import {useDataValue} from "../../Data/DataProvider";
import {accessUrl} from "../../Spotify/spotify";

export default function () {
    const [{demo}, dispatch] = useDataValue();

    function handleDemo() {
        dispatch({
            type: "SET_DEMO",
            demo: true,
        });
    }

    return (<div>
        {!demo ?
            <main className={'choice'}>
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt=""/>
                <div className={'btn_wrapper'}>
                    <div><a href={accessUrl}>Login</a></div>
                    <div onClick={() => handleDemo()}>Demo App</div>
                </div>
            </main>
            : <Home/>}
    </div>)
}


