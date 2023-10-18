import './App.css';
import { Dashboard } from './componenets/Dashboard';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
