import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        <BotResponse response="Bienvenida al asistencia para consultas sobre asistencia legal" />
      </h1>
      <h2>
        Realice sus consultas sobre la inciativa de ley 6347 y obtenga respuestas instantáneas!
      </h2>
      Caracteristicas:
      <ul>
        <li>Respuestas instantáneas a cualquier pregunta</li>
        <li>Tecnología de aprendizaje profundo que mejora con el uso</li>
        <li>Aprendizaje continuo</li>
        <li>Interfaz fácil de usar</li>
        <li>Disponible 24/7</li>
      </ul>
    </div>
  );
};

export default IntroSection;
