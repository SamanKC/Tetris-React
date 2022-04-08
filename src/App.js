import Board from './components/gameboard/Board';
import Score from './components/scoreboard/Score';
import './components/gameboard/Board.css'
import './components/scoreboard/Score.css'
import './App.css';

function App() {
  return (
      <div className="maincontainer">
        <Board/>
        <Score/>
      </div>
 
  );
}

export default App;
