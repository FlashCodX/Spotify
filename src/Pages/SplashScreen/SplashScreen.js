import React from 'react'
import './SplashScreen.css'
import ProgressRing from "../../Components/ProgressRing/ProgressRing";


export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            token: null
        }

    }

    componentDidMount() {
        const interval = setInterval(() => {
            const progress = this.state.progress
            this.setState({progress: (progress + 2)}, () => {
                if (this.state.progress >= 100) clearInterval(interval)

            })
        }, 30)
        if (this.state.progress === 100) clearInterval(interval)


    }


    render() {
        return (
            <main className={'SplashScreen'}>
                <div className="wrapper" data-anim="base wrapper">

                    <ProgressRing radius={170} stroke={3} progress={this.state.progress}/>
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                         alt=""/>
                    <div className={'remastered'}>Remastered</div>

                    <div className={'author'}><span>by Flash</span><span>codX</span></div>
                </div>
            </main>
        )
    }


}