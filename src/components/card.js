import React from "react";
import '../App.css';
const Card=(props)=>{

    return(
        <div>
            <a href={props.path}>
         <div className="card" id={props.id}>
            <img src={props.cardimg} alt="images"></img>
            <h3>{props.title}</h3>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
        <span class="link"></span>
      </a>
         </div>
         </a>
        </div>
    )
}

export default Card;