//import React from 'react';
import { useState } from "react";
import { BiHappyBeaming } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

function Card() {

    const [heart, setHeart] = useState(false);
    const [count, setCount] = useState(0);



    const handleHeart = () => {
        if (!heart) {
            setHeart(true)
            setCount(count+1)
        }
        else {
            setHeart(false)
            setCount(count-1)
        }
            
    }

    return (
        <div className="card">
            <span>Patiktukai: {count}</span>
            <div className="card-header" style={{display:"flex", justifyContent:"center", alighItems:"center", gap:30}}>
                <BiHappyBeaming/>
                <p style={{marginTop:15}}>Please like my dog</p>
            </div>

            <img src="https://pngimg.com/uploads/german_shepherd/german_shepherd_PNG53.png" alt="" style={{width:200}} onDoubleClick={handleHeart}/>

            <div className="card-footer">
                {heart ? <FaRegHeart  style={{fontSize:70, color:"red"}} onClick={handleHeart}/> : <FaRegHeart style={{fontSize:70}} onClick={handleHeart}/>}
            </div>

        </div>
    )
}

export default Card;