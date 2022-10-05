import React from "react";
import './Track.css'

export class Track extends React.Component {
    constructor(props){
        super(props);
        this.renderAction = this.renderAction.bind(this)
    }

    renderAction(){
        return (
            <button className="Track-action">
                {isRemoval ? '+': '-'}
            </button>
        )
    }
    
    render(){
        return (
            <div className="Track">
                <div className="Track-information">
                    {/* <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                </div>
                {this.renderAction}
                {/* <button className="Track-action"><!-- + or - will go here --></button> */}
            </div>
        )
    }
}