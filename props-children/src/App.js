import Apples from './components/Apples';
import Pears from './components/Pears';
import Bag from './components/Bag';
import './App.css';

function App() {
  return (
    <Bag>
      <Apples color="yellow" number="5" />
      <Pears friend="Peter" />
    </Bag>
  );
}

export default App;
