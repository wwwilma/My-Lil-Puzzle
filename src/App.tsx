import Game from "./components/game/Game";
import ".App.css";

function App() {
  const rows = 4;
  const cols = 4;

  return (
    <div className="App">
      <Game rows={rows} cols={cols}/>
    </div>
  );
}

export default App;