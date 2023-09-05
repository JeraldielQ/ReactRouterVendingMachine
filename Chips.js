import React, { useState } from "react";
import "./Chips.css"; // Import the CSS file

function Chips() {
  const [count, setCount] = useState(0);
  const [imagePositions, setImagePositions] = useState([]);

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount(count + 1);
    addRandomImage();
  };

  // Function to add an image at a random position
  const addRandomImage = () => {
    const newPosition = {
      top: `${Math.random() * 90}vh`,
      left: `${Math.random() * 90}vw`,
    };

    setImagePositions([...imagePositions, newPosition]);
  };

  return (
    <div className="container">
      <div className="content-container">
        <button onClick={incrementCount}>EAT! EAT!</button>
        <p>BAGS EATEN: {count}</p>
        <nav>
          <ul><a href="/">GO BACK</a></ul>
        </nav>
      </div>
      <div className="image-container">
        {imagePositions.map((position, index) => (
          <img
            key={index}
            src="https://png.pngitem.com/pimgs/s/2-25052_dorito-bag-png-doritos-price-in-pakistan-transparent.png"
            alt={`Chips Image ${index}`}
            style={{
              top: position.top,
              left: position.left,
              position: "absolute",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Chips;
