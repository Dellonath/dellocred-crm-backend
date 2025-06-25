import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './about/About';
import Client from './clients/Client';
import './App.css';

function Home() {
  return <h2>Home Page</h2>;
}

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#282c34' }}>
      <Link to="/" style={{ color: '#61dafb', marginRight: '1rem' }}>Home</Link>
      <Link to="/about" style={{ color: '#61dafb', marginRight: '1rem' }}>About</Link>
      <Link to="/clients" style={{ color: '#61dafb' }}>Clients</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Client />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
