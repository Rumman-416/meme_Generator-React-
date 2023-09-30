import React from "react";
import { useState } from "react";
import memesData from "./memesData";

const Body = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "",
  });

  const [allMemeImg, setAllMemeImg] = useState(memesData);

  function randomMeme() {
    const meme = allMemeImg.data.memes;
    const random = Math.floor(Math.random() * meme.length);
    const url = meme[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  return (
    <div className="form">
      <span>
        <input type="text" placeholder="uppper text" />
        <input type="text" placeholder="bottom text" />
      </span>
      <button onClick={randomMeme}>Get a new meme 🖼️</button>
      <img src={meme.randomImg} alt="" className="memeImg" />
    </div>
  );
};

export default Body;
