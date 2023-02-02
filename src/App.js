import { Link,Routes, Route, BrowserRouter as Router } from "react-router-dom"
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/Characters';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">

<Link to="/">Home</Link>
<Link to="/characters">Characters</Link>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/characters" element={<CharactersPage></CharactersPage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
