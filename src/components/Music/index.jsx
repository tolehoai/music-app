import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "reactstrap";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { Typography } from "@material-ui/core";

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
    return console.log("End");
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
    let musicIndex = currentMusic.index;
    if (currentMusic.index === 0) {
      const newCurrentMusic = {
        url: musics.top100_AM[1].songs[0].music,
        index: 0,
      };
      setCurrentMusic(newCurrentMusic);
    } else {
      const newCurrentMusic = {
        url: musics.top100_AM[1].songs[musicIndex - 1].music,
        index: musicIndex - 1,
      };
      setCurrentMusic(newCurrentMusic);
    }

    const newPlay = {
      isPlay: true,
      title: "Pause",
    };
    setPlay(newPlay);
  };
  const handleNextClick = () => {
    let musicIndex = currentMusic.index;
    if (currentMusic.index > 99) {
      const newCurrentMusic = {
        url: musics.top100_AM[1].songs[99].music,
        index: 0,
      };
      setCurrentMusic(newCurrentMusic);
    } else {
      const newCurrentMusic = {
        url: musics.top100_AM[1].songs[musicIndex + 1].music,
        index: musicIndex + 1,
      };
      setCurrentMusic(newCurrentMusic);
    }

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

  const handleEndSong = () => {
    console.log("End");
  };

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
    "@keyframes spin ": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
    "@keyframes noSpin ": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
    app_content: {
      background: "linear-gradient(45deg, #fff8f2 30%, #ffffff 90%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "30px",
      maxHeight: "750px",
      padding: " 0 20px 20px 20px",
      boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      position: "relative",
    },
    music_img: {
      width: "220px",
      borderRadius: "1000px",
      animation: `$spin linear 7000ms infinite`,
    },
    music_control: {
      display: "flex",
      alignItems: "center",
    },
    music_play_button: {
      borderRadius: "1000px",
      background: "linear-gradient(45deg, #f52a2d 30%, #ff3f48 90%)",
      border: "none",
      padding: "10px",
      boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      margin: "10px",
    },
    next_pre_song: {
      border: "none",
      padding: "10px",
      backgroundColor: "transparent",
      margin: "10px",
    },
    noplay: {
      animation: `$noSpin linear 7000ms infinite`,
    },
    music_name: {
      paddingTop: "100px",
      padding: "10px",
      fontSize: "20px",
      fontWeight: "700",
    },
    music_author: {
      padding: "5px",
      fontSize: "15px",
    },
    text_area: {
      maxHeight: "500px",
      maxWidth: "500px",
    },
  });
  const classes = useStyles();
  const myFunction = () => {
    console.log("End");
    alert("The video has ended");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col xs="4"></Col>
          <Col xs="4">
            <div className={classes.app_content}>
              <h2>
                {/* {musics.top100_AM[1].songs[currentMusic.index].title} */}
                <Typography className={classes.music_name}>
                  {" "}
                  {musics.top100_AM[1].songs[currentMusic.index].title}
                </Typography>
              </h2>
              <h5 className={classes.music_author}>
                {musics.top100_AM[1].songs[currentMusic.index].creator}
              </h5>

              <img
                src={musics.top100_AM[1].songs[currentMusic.index].bgImage}
                alt=""
                className={classes.music_img}
                className={
                  play.isPlay
                    ? `${classes.music_img}`
                    : `${classes.music_img} ${classes.noplay}`
                }
              />

              <br />
              <div className={classes.music_control}>
                <button
                  onClick={handlePreviosClick}
                  style={{ color: "black", fontSize: 20 }}
                  className={classes.next_pre_song}
                >
                  <SkipPreviousIcon />
                </button>
                <audio
                  controls
                  id="music"
                  // src={currentMusic.url}
                  // onended={handleEndSong}
                  ended="myFunction()"
                >
                  {" "}
                  <source src={currentMusic.url} />
                </audio>
                <button
                  onClick={handlePlayClick}
                  className={classes.music_play_button}
                >
                  {play.title === "Play" ? (
                    <PlayArrowIcon style={{ color: "white", fontSize: 40 }} />
                  ) : (
                    <PauseIcon style={{ color: "white", fontSize: 40 }} />
                  )}
                </button>

                <button
                  onClick={handleNextClick}
                  style={{ color: "black", fontSize: 20 }}
                  className={classes.next_pre_song}
                >
                  <SkipNextIcon />
                </button>
              </div>

              {/* <audio
                controls
                id="music"
                src={currentMusic.url}
                onended={handleEndSong}
              ></audio> */}
              <h1>
                <Badge color="secondary">New</Badge>
              </h1>
              <h1>
                <Badge color="secondary">New</Badge>
              </h1>
              <h1>
                <Badge color="secondary">New</Badge>
              </h1>
              <h1>
                <Badge color="secondary">New</Badge>
              </h1>
            </div>
          </Col>
          <Col xs="4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Music;
