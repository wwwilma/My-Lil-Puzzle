import Game from "./components/game/Game";
import "./App.css";

/**
 * Main App component representing application root.
 * @returns Application element.
 */
function App() {
  // Here, you are welcome to change the number of rows and columns.
  // Please let me know if you have any questions.
  const rows = 4;
  const cols = 4;

  return (
    <div className="App">
      <Game rows={rows} cols={cols}/>
    </div>
  );
}

export default App;
