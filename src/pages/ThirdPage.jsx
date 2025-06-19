import { useState } from "react";
import img1 from "../img/image1.png";
import img2 from "../img/image2.png";
import img3 from "../img/image3.png";
import img4 from "../img/image4.png";
import img5 from "../img/image1.png";
import img6 from "../img/image1.png";
import img7 from "../img/image1.png";
import img8 from "../img/image1.png";
import img9 from "../img/image1.png";
import img10 from "../img/image1.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function ThirdPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="flex flex-col min-h-screen justify-start items-center py-[50rem]">
      <div className="w-[1280rem]">
        <p className="text-start font-semibold text-[40rem] mb-[30rem]">
          Our Gardening Portfolio
        </p>
        <div className="text-center flex">
          <p className="text-start mr-[50rem] text-[15rem]">
            Explore our gallery of stunning gardens designed and <br />
            maintained by Green Bliss Designs.
          </p>
          <p className="text-start text-[15rem]">
            See how we've transformed ordinary spaces into <br />
            extraordinary green escapes.
          </p>
        </div>
      </div>

      {/* Grid de imágenes */}
      <div className="w-[1280rem] grid grid-cols-5 grid-rows-2 gap-[10rem] mt-[50rem]">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openCarousel(index)}
            className="w-[250rem] h-[250rem] bg-gray-600 rounded-[20rem] overflow-hidden cursor-pointer flex items-center justify-center"
          >
            <img
              className="w-full h-full object-cover"
              src={img}
              alt={`img-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Modal carrusel */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#000000e1]  z-50 flex items-center justify-center">
          {/* Botón cerrar */}
          <button
            onClick={closeCarousel}
            className="absolute top-[20rem] right-[20rem] text-white text-[40rem] font-bold z-50"
          >
            ×
          </button>

          {/* Botón anterior */}
          <button
            onClick={prevImage}
            className="absolute left-[30rem] text-white text-[60rem] font-bold z-50"
          >
            ←
          </button>

          {/* Imagen actual */}
          <img
            src={images[currentIndex]}
            alt={`img-${currentIndex}`}
            className="max-w-[80%] max-h-[80%] object-contain rounded-[10rem] z-40"
          />

          {/* Botón siguiente */}
          <button
            onClick={nextImage}
            className="absolute right-[30rem] text-white text-[60rem] font-bold z-50"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default ThirdPage;
