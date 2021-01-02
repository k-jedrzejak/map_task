import React from 'react';
import '../Slide/slide.css'

function Slide(props){
    return(
        <div className="slide">
            <img className="slide__image" src={props.src} alt={props.src}></img>
            <div className="slide__dsc">{props.desc}</div>
        </div>
    )
}


export default Slide;