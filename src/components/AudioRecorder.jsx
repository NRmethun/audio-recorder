import { useState, useEffect } from "react";
import AudioAnalyser from "react-audio-analyser";

import React from "react";

const AudioRecorder = ({ word, audioPath, id }) => {
  const [status, setStatus] = useState("");
  const [audioType, setAudioType] = useState("");
  const [audioSrc, setAudioSrc] = useState("");

  const controlAudio = (status) => {
    setStatus(status);
  };

  const changeScheme = (e) => {
    setAudioType(e.target.value);
  };

  const playSound = () => {
    const audio = new Audio(audioPath);
    audio.loop = false;
    audio.play();
  };

  const audioProps = {
    audioType,
    // audioOptions: {sampleRate: 30000},

    status,
    audioSrc,
    timeslice: 1000,
    height: 40,
    width: 200,
    startCallback: (e) => {
      console.log("succ start", e);
    },
    pauseCallback: (e) => {
      console.log("succ pause", e);
    },
    stopCallback: (e) => {
      setAudioSrc(window.URL.createObjectURL(e));
      console.log("succ stop", e);
    },
    onRecordCallback: (e) => {
      console.log("recording", e);
    },
    errorCallback: (err) => {
      console.log("error", err);
    },
  };

  useEffect(() => {
    setAudioType("audio/wav");
  }, []);

  return (
    <div className="audioRecorder">
      <div className="wordContainer">
        <p className="word">
          {id}. "{word}"
        </p>
        <button onClick={playSound}>ref</button>
      </div>

      <AudioAnalyser {...audioProps}>
        <div className="btn-box">
          <button className="btn" onClick={() => controlAudio("recording")}>
            Start
          </button>
          <button className="btn" onClick={() => controlAudio("inactive")}>
            Stop
          </button>
        </div>
        
      </AudioAnalyser>
    </div>
  );
};

export default AudioRecorder;
