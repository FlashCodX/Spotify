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
    song:
        {
            "album": {
                "album_type": "SINGLE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L"
                        },
                        "href": "https://api.spotify.com/v1/artists/4xRYI6VqpkE3UwrDrAZL8L",
                        "id": "4xRYI6VqpkE3UwrDrAZL8L",
                        "name": "Logic",
                        "type": "artist",
                        "uri": "spotify:artist:4xRYI6VqpkE3UwrDrAZL8L"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4f9iBmdUOhQWeP7dcAn1pf"
                        },
                        "href": "https://api.spotify.com/v1/artists/4f9iBmdUOhQWeP7dcAn1pf",
                        "id": "4f9iBmdUOhQWeP7dcAn1pf",
                        "name": "Rag'n'Bone Man",
                        "type": "artist",
                        "uri": "spotify:artist:4f9iBmdUOhQWeP7dcAn1pf"
                    }
                ],

                "id": "4Ed5rGfPaTHEJ7mfmKiHuo",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273a23be68267ae83ec1f3f0756",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02a23be68267ae83ec1f3f0756",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851a23be68267ae83ec1f3f0756",
                        "width": 64
                    }
                ],
                "name": "Broken People (with Logic & Rag'n'Bone Man) [From Bright: The Album]",
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L"
                    },
                    "href": "https://api.spotify.com/v1/artists/4xRYI6VqpkE3UwrDrAZL8L",
                    "id": "4xRYI6VqpkE3UwrDrAZL8L",
                    "name": "Logic",
                    "type": "artist",
                    "uri": "spotify:artist:4xRYI6VqpkE3UwrDrAZL8L"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4f9iBmdUOhQWeP7dcAn1pf"
                    },
                    "href": "https://api.spotify.com/v1/artists/4f9iBmdUOhQWeP7dcAn1pf",
                    "id": "4f9iBmdUOhQWeP7dcAn1pf",
                    "name": "Rag'n'Bone Man",
                    "type": "artist",
                    "uri": "spotify:artist:4f9iBmdUOhQWeP7dcAn1pf"
                }
            ],
            "duration_ms": 212066,
            "id": "5rxPi0MiR4miNK0rCmk980",
            "name": "Broken People (with Logic & Rag'n'Bone Man)",
            "preview_url": "https://p.scdn.co/mp3-preview/e516798a056ed38a0e840b2a49f16484c642c752?cid=774b29d4f13844c495f206cafdad9c86",
        }

}

const reducer = (state, action) => {
    console.log(action)
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
