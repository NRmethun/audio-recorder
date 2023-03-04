import React from "react";
import { wordList } from "../lib/wordList";
import AudioRecorder from "./AudioRecorder";

const AudioRecorderList = () => {
  return (
    <div className="audioRecorderList">
      {wordList.map((item) => (
        <AudioRecorder
          key={(Math.random() + 1).toString(36).substring(7)}
          word={item.bd}
          audioPath={item.audio}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default AudioRecorderList;
