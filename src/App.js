import "./App.css";
import AudioRecorderList from "./components/AudioRecorderList";

function App() {
  return (
    <div className="App">
      <h1 className="logo">
        Data Collector
      </h1>
      <div className="container">
        <AudioRecorderList />
      </div>
    </div>
  );
}

export default App;
