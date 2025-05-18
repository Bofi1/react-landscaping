import React, { useEffect, useState } from "react";

const FadeOneByOne = () => {
  const contents = [
    "Bienvenido",
    "Paso 1: Registrarse",
    "Paso 2: Verifica tu email",
    "Paso 3: Completa tu perfil",
    "Paso 4: Explora funciones",
    "Paso 5: Invita amigos",
    "¡Todo listo!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia el fade out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % contents.length);
        setFade(true); // inicia el fade in
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative">
      {contents.map((text, i) => (
        <div
          key={i}
          className={`w-[1400rem] h-[300rem] bg-blue-600 rounded-[20px] text-white shadow-xl text-center flex items-center justify-center absolute transition-opacity duration-500 px-4 text-[20rem] font-medium ${
            i === currentIndex
              ? fade
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0"
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default FadeOneByOne;
