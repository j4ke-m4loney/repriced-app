import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold">Repriced</h1>
      <p className="mt-4 text-repricedGreen">Making real estate more accessible for everyone</p>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
