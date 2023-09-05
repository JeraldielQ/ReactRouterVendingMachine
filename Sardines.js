import React from "react";
import "./Sardines.css";

function Sardines() {
  return (
    <div className="container">
      <nav className="sardines-container">
        <p className="sardines-text">YOU DON'T EAT SARDINES!!!</p>
        <ul>
            <a href="/" className="go-back-link">
              GO BACK
            </a>
        </ul>
      </nav>
    </div>
  );
}

export default Sardines;
