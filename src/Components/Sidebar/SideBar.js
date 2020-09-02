import React from 'react'
import './Sidebar.css'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {useDataValue} from "../../Data/DataProvider";

export default function SideBar() {
    const [{playlists}] = useDataValue();



    function returnPlaylists(){
        let Playlists = []
        playlists.forEach((playlist, i) => {
            Playlists.push(<div key={i}>{playlist?.name}</div>)
        })
        return Playlists
    }




    return (
        <div className={'sidebar'}>
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="logo"/>
            <div className={'menu'}>
                <div>
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div>
                    <SearchIcon/>
                    <p>Search</p>
                </div>
                <div>
                    <LibraryMusicIcon/>
                    <p>Your Library</p>
                </div>
            </div>

            <div className={'playlists'}>
                <div className={'title'}>
                    <p>Your Playlists</p>
                    <hr/>
                </div>
                <section>
                    {returnPlaylists()}
                </section>
            </div>

        </div>
    );
}