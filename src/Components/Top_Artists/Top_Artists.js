import React from 'react'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {useDataValue} from "../../Data/DataProvider";
import {DemoData} from "../../DemoData/DemoData";
import './Top_Artists.css'

export default function Top_Artists() {
    const [{user, artists, demo}] = useDataValue();

    function handleDropDown() {
        const dropdown = document.getElementsByClassName('dropdown')[0]
        if (dropdown.style.visibility === 'hidden') {
            dropdown.style.visibility = 'visible'
        } else {
            dropdown.style.visibility = 'hidden'
        }
    }

    function logOut() {
        localStorage.clear()
        window.location.reload()
    }


    function returnArtists() {
        let artists_data = []
        let artists_obj = []
        demo ? artists_data = DemoData.top_artists : artists_data = artists

        artists_data.forEach((artist, i) => {
            artists_obj.push(<div key={i}>
                <img src={artist.images[0].url} alt=""/>
                <div>
                    <p>{artist.name}</p>
                    <p>Followers: <span>{artist.followers.total.toLocaleString()}</span></p>
                    <p>Genres: {returnGenres(artist.genres)}</p>

                </div>
            </div>)

        })
        return artists_obj

    }

    function returnGenres(genres) {
        let Genres = ''
        if (genres.length >= 2) {
            genres = genres.slice(0, 2)
        }
        genres.map((genre, i) => {
            i === 0 ? Genres = genre : Genres = Genres + ', ' + genre
        })

        return Genres
    }




    function returnProfileImage() {
        return demo ? DemoData.profile_picture : user?.images?.length ? user.images[0].url : DemoData.profile_picture
    }

    return <div className={'right'}>
        <div className={'profile'}>
            <img
                src={returnProfileImage()}
                alt=""/>
            <p>{demo ? DemoData.name : user?.display_name}</p>
            <KeyboardArrowDownIcon onClick={() => handleDropDown()} style={demo ? {visibility: 'hidden'} : null}/>
            <div className={'dropdown'} style={{visibility: 'hidden'}}>
                <p onClick={() => logOut()}>Log Out</p>
            </div>
        </div>
        <div className={'recommendations'}>
            <div className={'title'}>
                <p>Your Top Artists</p>
            </div>
            <div className={'r_content'}>
                {returnArtists()}
            </div>
        </div>


    </div>

}