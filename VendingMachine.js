import React from 'react';
import "./VendingMachines.css"

function VendingMachine() {
    return (
      <div className="rectangle">
        <p>What do you desire?</p>
        <div className="nav-rectangle">
          <nav>
            <ul>
              <li><a href="/Chips">Chips</a></li>
              <li><a href="/Sardines">Sardines</a></li>
              <li><a href="/Soda">Soda</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  

export default VendingMachine;
