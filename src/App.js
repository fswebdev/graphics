import React, { useState, useEffect } from "react";
import Image from "./Image"; // Import the Image component
import "./style.css";

const images = [
  {
    src: "/images/super nova.svg",
    width: "30%",
    height: "30%",
    alt: "super nova.svg",
    caption: "Super nova pattern",
    loading: "lazy";
  },
  {
    src: "/images/chocolate bliss.svg",
    width: "30%",
    height: "30%",
    alt: "chocolate bliss.svg",
    caption: "Chocolate bliss logo",
    loading: "lazy";
  },
  {
    src: "/images/innovative tech-second.svg",
    width: "30%",
    height: "30%",
    alt: "innovative tech-second.svg",
    caption: "Innovative tech logo",
    loading: "lazy";
  },
  {
    src: "/images/websitedesignkarratha.svg",
    width: "30%",
    height: "30%",
    alt: "websitedesignkarratha.svg",
    caption: "Website design karratha logo",
    loading: "lazy";
  },
  {
    src: "/images/imaging work.svg",
    width: "30%",
    height: "30%",
    alt: "imaging work.svg",
    caption: "Imaging work",
    loading: "lazy";
  },
  {
    src: "/images/imaging work - fourth.svg",
    width: "30%",
    height: "30%",
    alt: "imaging work - fourth.svg",
    caption: "Imaging work",
    loading: "lazy";
  },
  {
    src: "/images/copper.svg",
    width: "30%",
    height: "30%",
    alt: "copper.svg",
    caption: "Copper logo",
    loading: "lazy";
  },
  {
    src: "/images/dove productions.svg",
    width: "30%",
    height: "30%",
    alt: "dove productions.svg",
    caption: "Dove productions logo",
    loading: "lazy";
  },
  {
    src: "/images/color splash.svg",
    width: "30%",
    height: "30%",
    alt: "color splash.svg",
    caption: "Color splash pattern",
    loading: "lazy";
  },
  {
    src: "/images/karouss.svg",
    width: "30%",
    height: "30%",
    alt: "karouss.svg",
    caption: "Karouss logo",
    loading: "lazy";
  },
  {
    src: "/images/artistic commerce.svg",
    width: "30%",
    height: "30%",
    alt: "artisitic commerce.svg",
    caption: "Artistic commerce logo",
    loading: "lazy";
  },
  {
    src: "/images/bathroom city.svg",
    width: "30%",
    height: "30%",
    alt: "bathroom city.svg",
    caption: "Bathroom city logo",
    loading: "lazy";
  },

  {
    src: "/images/arkyd.svg",
    width: "30%",
    height: "30%",
    alt: "arkyd.svg",
    caption: "Arkyd telescope picture",
    loading: "lazy";
  },
  {
    src: "/images/centgames.svg",
    width: "30%",
    height: "30%",
    alt: "centgames.svg",
    caption: "1centgames.com logo",
    loading: "lazy";
  },
  {
    src: "/images/box.svg",
    width: "30%",
    height: "30%",
    alt: "light.svg",
    caption: "Box pattern",
    loading: "lazy";
  },
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation (loading images)
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <div align="center">
      <h1 className="h1">Graphics work portfolio</h1>
      {loading ? (
        // Display a loading message while images are loading
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading images...</p>
        </div>
      ) : (
        // Display the images when loading is complete
        images.map((image, index) => <Image key={index} {...image} />)
      )}
    </div>
  );
}

export default App;
