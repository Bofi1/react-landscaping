import React, { useState } from "react";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";

const images = [
  { id: 1, src: `${image1}`, alt: "Imagen 1" },
  { id: 2, src: `${image2}`, alt: "Imagen 2" },
  { id: 3, src: `${image3}`, alt: "Imagen 3" },
  { id: 4, src: `${image4}`, alt: "Imagen 4" },
];

function Carrousel() {
  const [activeId, setActiveId] = useState(1); // Imagen activa por defecto

  const toggleImage = (id) => {
    setActiveId(id);
  };

  return (
    <div className="flex w-[700rem] items-center justify-center gap-[30px] p-4 ">
      {images.map((img) => (
        <div
          key={img.id}
          onMouseOver={() => toggleImage(img.id)}
          className={`transition-all duration-500 ease-in-out  overflow-hidden cursor-pointer  ${
            activeId === img.id ? "flex-[3]" : "flex-[1]"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="object-cover w-[500rem] h-[591.5rem] rounded-[10rem]"
          />
        </div>
      ))}
    </div>
  );
}

export default Carrousel;
