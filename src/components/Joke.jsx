import React, { useState } from "react";
const Joke = () =>{
const [joke, setJoke] = useState("");

const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res)=> res.json())
    .then((data) => setJoke(data.joke))
};
 return (
  <div className="joke">
    <button onClick={fetchApi}>Get joke</button> 
    <p>{joke}</p>
  </div>
 );
}

export default Joke;