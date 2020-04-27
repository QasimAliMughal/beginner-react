import React,{useState} from 'react';
import './App.css';

function Tweet(props) {


    const [likes,setLikes]=useState(0);

    const likesIncrement = ()=>{
        setLikes(likes + 1);
    }

    return (
        <div className="twet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h4>{likes} number of likes</h4>
            <button onClick={likesIncrement}>Like</button>

        </div>
    );

}

export default Tweet;
