import React from 'react'
import './Top_tracks.css'
import {useDataValue} from "../../Data/DataProvider";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import {s_audio_player} from "../Footer/Footer";


export default function Top_tracks() {
    const [{top_tracks, playing, timestamp, current}, dispatch] = useDataValue();


    function handleClick(track, position) {
        dispatch({
            type: "SET_CURRENT",
            current: position,
        });

        if (playing) {
            dispatch({
                type: "SET_TIMESTAMP",
                timestamp: s_audio_player.currentTime,
            });

        } else {
            s_audio_player.src = top_tracks[current].preview_url
            s_audio_player.currentTime = timestamp

            s_audio_player.play().then(_ => null).catch(()=>null)
        }

        if (track.id !== top_tracks[current].id) {
            dispatch({
                type: "SET_TIMESTAMP",
                timestamp: 0,
            });

            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
            dispatch({
                type: "SET_PROGRESS",
                progress: 0,
            });

            s_audio_player.src = track.preview_url




                s_audio_player.play().then().catch((()=>null))



            s_audio_player.currentTime = 0

        } else {
            dispatch({
                type: "SET_PLAYING",
                playing: !playing,
            });

            if (playing) {
                s_audio_player.pause()
            }
        }

    }

    function returnTracks() {
        let tracks = []
        top_tracks.forEach((track, i) => {
            tracks.push(
                <div key={i}>
                    <img src={track?.album?.images[0]?.url} alt="track"/>
                    <section>
                        {playing && track?.id === top_tracks[current]?.id ?
                            <PauseCircleOutlineIcon fontSize={"inherit"} onClick={() => handleClick(track, i)}/>
                            : <PlayCircleOutlineIcon fontSize={"inherit"} onClick={() => handleClick(track, i)}/>}
                        <div>
                            <h1>{track.name}</h1>
                            <h4> {returnArtists(track)}</h4>
                        </div>
                    </section>
                </div>
            )
        })
        return tracks

    }

    function returnArtists(track) {
        let artists = []
        track.artists.forEach((artist, i) => {
            artists.push(i === 0 ? artist.name : ', ' + artist.name)
        })
        return artists
    }


    return <main className={'top_songs'}>
        <div className={'playlist'}>
            <div className={'title'}>
                <img src={top_tracks[0]?.album?.images[0].url}
                     alt=""/>
                <div>
                    <h4>Playlist</h4>
                    <h1>Top Songs</h1>
                    <p>Your MixTape full of your favourite tracks.</p>
                </div>
            </div>
            <div className={'tracks'}>
                {returnTracks()}
            </div>
        </div>
    </main>


}