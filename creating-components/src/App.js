import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <div>
      <Header name="Yashvi" color="Purple"/>
      <Main greet="Hello"/>
      <Sidebar greet="Hi" />
    </div>
  );
}

export default App;
