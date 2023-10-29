import React, { useState, useEffect } from "react";
import Image from "./Image"; // Import the Image component
import "./style.css";

const images = [
  {
    src: "/image/super nova.jpg",
    width: "30%",
    height: "30%",
    alt: "super nova.jpg",
    caption: "Super nova pattern",
  },
  {
    src: "/image/color splash.jpg",
    width: "30%",
    height: "30%",
    alt: "color splash.jpg",
    caption: "Color splash pattern",
  },
  {
    src: "/image/imaging work.jpg",
    width: "30%",
    height: "30%",
    alt: "imaging work.jpg",
    caption: "Box pattern",
  },
  {
    src: "/image/imaging work - fourth.jpg",
    width: "30%",
    height: "30%",
    alt: "imaging work - fourth.jpg",
    caption: "Imaging work",
  },
  {
    src: "/image/chocolate bliss.jpg",
    width: "30%",
    height: "30%",
    alt: "chocolate bliss.jpg",
    caption: "Chocolate bliss logo",
  },
  {
    src: "/image/innovative tech-second.jpg",
    width: "30%",
    height: "30%",
    alt: "innovative tech-second.jpg",
    caption: "Innovative tech logo",
  },
  {
    src: "/image/websitedesignkarratha.com.jpg",
    width: "30%",
    height: "30%",
    alt: "websitedesignkarratha.com.jpg",
    caption: "Website design karratha logo",
  },
  {
    src: "/image/copper.jpg",
    width: "30%",
    height: "30%",
    alt: "copper.jpg",
    caption: "Copper logo",
  },
  {
    src: "/image/dove productions.jpg",
    width: "30%",
    height: "30%",
    alt: "dove productions.jpg",
    caption: "Dove productions logo",
  },

  {
    src: "/image/karouss.jpg",
    width: "30%",
    height: "30%",
    alt: "karouss.jpg",
    caption: "Karouss logo",
  },
  {
    src: "/image/artistic commerce.jpg",
    width: "30%",
    height: "30%",
    alt: "artisitic commerce.jpg",
    caption: "Artistic commerce logo",
  },
  {
    src: "/image/bathroom city.jpg",
    width: "30%",
    height: "30%",
    alt: "bathroom city.jpg",
    caption: "Bathroom city logo",
  },

  {
    src: "/image/arkyd.jpg",
    width: "30%",
    height: "30%",
    alt: "arkyd.jpg",
    caption: "Arkyd telescope picture",
  },
  {
    src: "/image/centgames.com.jpg",
    width: "30%",
    height: "30%",
    alt: "centgames.com.jpg",
    caption: "1centgames.com logo",
  },
  {
    src: "/image/box.jpg",
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
