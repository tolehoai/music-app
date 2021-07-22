import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Music.propTypes = { musics: PropTypes.object };

Music.defaultProps = {
  musisc: {},
};

function Music(props) {
  const { musics } = props;

  const [currentMusic, setCurrentMusic] = useState({
    url: musics.top100_AM[1].songs[0].music,
    index: 0,
  });

  const [play, setPlay] = useState({
    isPlay: false,
    title: "Play",
  });

  useEffect(() => {
    const newCurrentMusic = {
      url: musics.top100_AM[1].songs[0].music,
      index: 0,
    };
    setCurrentMusic(newCurrentMusic);
  }, []);

  ///Handle playClick
  useEffect(() => {
    let audio = document.getElementById("music");

    console.log(audio);
    if (play.isPlay === true) {
      audio.load();
      audio.play();
    } else audio.pause();
    // audio.play();
  }, [play]);

  // useEffect(() => {
  //   let audio = document.getElementById("music");
  //   audio.load();
  //   audio.play();
  // }, []);

  //End Handle playCick
  console.log(
    "Music from Music component: ",
    musics.top100_AM[1].songs[1].music
  );

  const handlePreviosClick = () => {
    const musicIndex = currentMusic.index;
    const newCurrentMusic = {
      url: musics.top100_AM[1].songs[musicIndex - 1].music,
      index: musicIndex - 1,
    };
    setCurrentMusic(newCurrentMusic);
    const newPlay = {
      isPlay: true,
      title: "Pause",
    };
    setPlay(newPlay);
  };
  const handleNextClick = () => {
    const musicIndex = currentMusic.index;
    const newCurrentMusic = {
      url: musics.top100_AM[1].songs[musicIndex + 1].music,
      index: musicIndex + 1,
    };
    setCurrentMusic(newCurrentMusic);
    const newPlay = {
      isPlay: true,
      title: "Pause",
    };
    setPlay(newPlay);
  };

  const handlePlayClick = () => {
    const newIsPlay = !play.isPlay;
    let newTitle;
    if (newIsPlay === true) newTitle = "Pause";
    else newTitle = "Play";
    const newPlay = {
      isPlay: newIsPlay,
      title: newTitle,
    };
    setPlay(newPlay);
  };

  return (
    <div>
      <h2>{musics.top100_AM[1].songs[currentMusic.index].title}</h2>
      <h3>{musics.top100_AM[1].songs[currentMusic.index].creator}</h3>
      <img src={musics.top100_AM[1].songs[currentMusic.index].bgImage} alt="" />
      <br />
      <button onClick={handlePreviosClick}>Previous</button>
      <audio id="music" controls src={currentMusic.url}></audio>
      <button onClick={handlePlayClick}>{play.title}</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Music;
