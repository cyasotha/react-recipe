
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import Default from './pages/Default';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <main>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/recipes" element={<Recipes/>} />
              <Route path="/recipes/:id" element={<Recipe/>} />
              <Route path="*" element={<Default/>} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
