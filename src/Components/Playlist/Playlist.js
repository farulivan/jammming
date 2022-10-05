import React from "react";
import './Playlist.css'
import { TrackList } from '../TrackList/TrackList'

export class Playlist extends React.Component {
    render(){
        return (
            <div className="Playlist">
                <input defaultValue='New Playlist'/>
                <TrackList 
                    playlistTracks={this.props.playlistTracks} playlistName={this.props.playlistName} 
                />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}