import React from "react";
import Footer from "../../Components/Footer/Footer";
import './Home.css'
import SideBar from "../../Components/Sidebar/SideBar";

import Top_Artists from "../../Components/Top_Artists/Top_Artists";
import Top_tracks from "../../Components/Top_Tracks/Top_tracks";

export default function Home() {


    return (
        <main className={'home'}>
            <SideBar/>
            <Top_tracks/>
            <Top_Artists/>
            <Footer/>
        </main>
    )
}