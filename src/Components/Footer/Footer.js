import React, {useEffect} from "react";
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import {Slider} from "@material-ui/core";

import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import {useDataValue} from "../../Data/DataProvider";
import {DemoData} from "../../DemoData/DemoData";


export const s_audio_player = new Audio(null)
s_audio_player.volume = 0.5

export default function Footer() {

    const [{

        demo,
        playing, current,
        top_tracks, timestamp,progress
    }, dispatch] = useDataValue();

    let label = null

    function play(track) {
        s_audio_player.src = track.preview_url
        s_audio_player.play()
    }


    s_audio_player.onended = () => {
        handleSkip()
    }


    s_audio_player.ontimeupdate = function (_) {
        dispatch({
            type: "SET_PROGRESS",
            progress: s_audio_player.currentTime.toPrecision(),
        });

    }




    function handlePlay() {
        dispatch({
            type: "SET_PLAYING",
            playing: !playing,
        });


        if (playing) {
            dispatch({
                type: "SET_TIMESTAMP",
                timestamp: s_audio_player.currentTime,
            });
            s_audio_player.pause()
        } else {
            s_audio_player.src = top_tracks[current].preview_url
            s_audio_player.currentTime = timestamp
            s_audio_player.play()
        }


    }

    function handleSkip() {

        if (top_tracks[current + 1]) {
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
            dispatch({
                type: "SET_CURRENT",
                current: current+1 ,
            })
            console.log(current)


            dispatch({
                type: "SET_TIMESTAMP",
                timestamp: 0,
            });

            play(top_tracks[current + 1])


        } else {
            dispatch({
                type: "SET_CURRENT",
                current: 0,
            })


            dispatch({
                type: "SET_TIMESTAMP",
                timestamp: 0,
            });

            play(top_tracks[0])


        }


    }


    function handlePrevious() {


        if (top_tracks[current - 1]) {
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
            dispatch({
                type: "SET_TIMESTAMP",
                timestamp: 0,
            });

            dispatch({
                type: "SET_CURRENT",
                current: current - 1,
            })

            play(top_tracks[current - 1])

        } else {

            dispatch({
                type: "SET_TIMESTAMP",
                timestamp: 0,
            });
            dispatch({
                type: "SET_CURRENT",
                current: top_tracks.length - 1,
            });


            play(top_tracks[top_tracks.length - 1])

        }

    }


    function handleHover() {
        label = document.getElementById('timestamp')


        window.onmousemove = function () {
            const calc = ((window.event['clientX'] * 30) / window.innerWidth).toLocaleString().replace(',', '')
            label.style.left = `${window.event['clientX']}px`
            label.innerHTML = millisToMinutesAndSeconds(calc)
        }


    }




    function millisToMinutesAndSeconds(millis) {

        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }


    function handleVolume(e, volume) {
        s_audio_player.volume = volume / 100
    }


    function handleBarCLick() {

        const result = window.event['clientX'] * 30 / window.innerWidth

        s_audio_player.currentTime = result
        dispatch({
            type: "SET_PROGRESS",
            progress: result,
        });
    }
    return (
        <div className={'footer'}>
            <div className={'progress'} id={'progress'} onMouseOver={() => handleHover()}
                 onClick={() => handleBarCLick()}>
                <div className={'label'} id={'timestamp'}>2:11</div>
                <div id={'bar'}
                     style={{width: (progress * window.innerWidth / 30) + 'px'}}/>
            </div>
            <div className={'song_info'}>
                <img src={top_tracks[current]?.album?.images[0]?.url} alt=""/>
                <div>
                    <p>{top_tracks[current]?.name}</p>

                    <p>{top_tracks[current]?.artists[0]?.name}</p>
                </div>
            </div>
            <div className={'controls'}>
                <SkipPreviousRoundedIcon onClick={() => handlePrevious()} fontSize={"inherit"}/>
                {!playing ? <PlayCircleOutlineIcon fontSize={"inherit"} onClick={() => handlePlay()}/> :
                    <PauseCircleOutlineIcon fontSize={"inherit"} onClick={() => handlePlay()}/>
                }
                <SkipNextRoundedIcon onClick={() => handleSkip()} fontSize={"inherit"}/>
            </div>


            <div className={'sound_controls'}>
                <div className={'wrapper'}>
                    <div className={'volume'}>
                        <VolumeDownRoundedIcon/>
                        <Slider defaultValue={50} className={'slider'}
                                onChangeCommitted={(e,
                                                    volume) => handleVolume(e, volume)}
                                aria-labelledby="continuous-slider"/>
                    </div>
                </div>


            </div>


        </div>
    );


}

