import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Pool from './Pool';
import Explore from './Explore';

function App() {
  return (
    <Router>
      <div style={{backgroundColor: "#483E33"}}>
      <div>

        <nav>
          <div className='center'>
            <h1>Arena</h1>
          </div>
        </nav>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
