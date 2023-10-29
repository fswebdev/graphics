import React, { useState, useEffect } from "react";
import Image from "./Image"; // Import the Image component
import "./style.css";

const images = [
  {
    src: "/images/super nova.jpg",
    width: "30%",
    height: "30%",
    alt: "super nova.jpg",
    caption: "Super nova pattern",
  },
  {
    src: "/images/color splash.jpg",
    width: "30%",
    height: "30%",
    alt: "color splash.jpg",
    caption: "Color splash pattern",
  },
  {
    src: "/images/imaging work.jpg",
    width: "30%",
    height: "30%",
    alt: "imaging work.jpg",
    caption: "Box pattern",
  },
  {
    src: "/images/imaging work - fourth.jpg",
    width: "30%",
    height: "30%",
    alt: "imaging work - fourth.jpg",
    caption: "Imaging work",
  },
  {
    src: "/images/chocolate bliss.jpg",
    width: "30%",
    height: "30%",
    alt: "chocolate bliss.jpg",
    caption: "Chocolate bliss logo",
  },
  {
    src: "/images/innovative tech-second.jpg",
    width: "30%",
    height: "30%",
    alt: "innovative tech-second.jpg",
    caption: "Innovative tech logo",
  },
  {
    src: "/images/websitedesignkarratha.com.jpg",
    width: "30%",
    height: "30%",
    alt: "websitedesignkarratha.com.jpg",
    caption: "Website design karratha logo",
  },
  {
    src: "/images/copper.jpg",
    width: "30%",
    height: "30%",
    alt: "copper.jpg",
    caption: "Copper logo",
  },
  {
    src: "/images/dove productions.jpg",
    width: "30%",
    height: "30%",
    alt: "dove productions.jpg",
    caption: "Dove productions logo",
  },

  {
    src: "/images/karouss.jpg",
    width: "30%",
    height: "30%",
    alt: "karouss.jpg",
    caption: "Karouss logo",
  },
  {
    src: "/images/artistic commerce.jpg",
    width: "30%",
    height: "30%",
    alt: "artisitic commerce.jpg",
    caption: "Artistic commerce logo",
  },
  {
    src: "/images/bathroom city.jpg",
    width: "30%",
    height: "30%",
    alt: "bathroom city.jpg",
    caption: "Bathroom city logo",
  },

  {
    src: "/images/arkyd.jpg",
    width: "30%",
    height: "30%",
    alt: "arkyd.jpg",
    caption: "Arkyd telescope picture",
  },
  {
    src: "/images/centgames.com.jpg",
    width: "30%",
    height: "30%",
    alt: "centgames.com.jpg",
    caption: "1centgames.com logo",
  },
  {
    src: "/images/box.jpg",
    width: "30%",
    height: "30%",
    alt: "light.jpg",
    caption: "Light pattern",
  },
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation (loading images)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div align="center">
      <h1 className="h1">Graphics work portfolio</h1>
      {loading ? (
        // Display a loading message while images are loading
        <p>Loading images...</p>
      ) : (
        // Display the images when loading is complete
        images.map((image, index) => <Image key={index} {...image} />)
      )}
    </div>
  );
}

export default App;
