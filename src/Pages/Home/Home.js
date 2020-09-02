import React from "react";
import Footer from "../../Components/Footer/Footer";
import './Home.css'
import SideBar from "../../Components/Sidebar/SideBar";
import TOP_ARTISTS from "../../Components/Top_Artists/Top_Artists";
import TOP_TRACKS from "../../Components/Top_Tracks/Top_tracks";

export default function Home() {


    return (
        <main className={'home'}>
            <SideBar/>
            <TOP_TRACKS/>
            <TOP_ARTISTS/>
            <Footer/>
        </main>
    )
}