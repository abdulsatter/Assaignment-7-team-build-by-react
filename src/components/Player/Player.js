import React from 'react';
import './Player.css';
const Player = (props)=>{
    // console.log(props.image)
    const {first_name,image,team,salary} = props.player;
    const addClick = props.addClick;
    // console.log(addClick)
    return(
        <div className = 'main'>
            <div className = 'player-part'>
                 <img src={image} alt="" />
                 <h2>{team}</h2>
                  <h3>{first_name}</h3>
                  <p>Salary:{salary}</p> 
                  <button onClick = {()=>addClick(props.player)}>add me</button>           

            </div>

        </div>
    )
}

export default Player;