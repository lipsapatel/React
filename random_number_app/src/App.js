import './App.css';
import Card from './Card';

const randNum = () => Math.floor(Math.random() * 100) + 1;
function App() {
  console.log(randNum);
  return (
    <div>
      <h1> Task: Add three Card elements</h1>
      <Card num={randNum()}></Card>
      <Card num={randNum()}></Card>
      <Card num={randNum()}></Card>
    </div>

  );
}

export default App;
