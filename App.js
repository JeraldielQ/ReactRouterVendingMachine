import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import Chips from './Chips';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/Chips" element={<Chips />} />
          <Route path="/Sardines" element={<Sardines />} />
          <Route path="/Soda" element={<Soda />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
