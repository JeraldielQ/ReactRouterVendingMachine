import React from "react";
import "./Soda.css";

function Soda() {
  const imageUrl =
    "https://media.istockphoto.com/id/681018122/photo/cola-with-crushed-ice-and-straw-in-tall-glass.jpg?s=2048x2048&w=is&k=20&c=_N35GjUvCk33cGyHwWNWVSVGcQskKY3xEHMzcCMwVmg=";

  // Generate random positions for the images
  const getRandomPosition = () => ({
    top: `${Math.random() * 90}vh`,
    left: `${Math.random() * 90}vw`,
  });

  // Array for random positions
  const imagePositions = Array(10).fill(null).map(getRandomPosition);

  return (
    <div className="soda-container">
      <div className="text-container">
        <nav className="sardines-container">
          <p className="soda-text">NOOO SUGARR!!!</p>
          <ul>
            <a href="/" className="go-back-link">
              GO BACK
            </a>
          </ul>
        </nav>
      </div>
      <div className="image-container">
        {imagePositions.map((position, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Soda ${index}`}
            className={`rotate-image${index % 2 === 0 ? 1 : 2} ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
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

export default Soda;
