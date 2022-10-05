import React from "react";
import './Playlist.css'
import { TrackList } from '../TrackList/TrackList'

export class Playlist extends React.Component {
    render(){
        const defaultValue = 'New Playlist'
        return (
            <div className="Playlist">
                <input value={defaultValue}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
                </div>
        )
    }
}