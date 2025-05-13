import { useState } from "react";
import "../styles/Carrousel.css";

function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % pictures.length);
  };

  const prev = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <>
          <button className="left" onClick={prev}>‹</button>
          <button className="right" onClick={next}>›</button>
        </>
      )}
      <img src={pictures[index]} alt={`Slide ${index + 1}`} loading="lazy" />
      {pictures.length > 1 && (
        <div className="counter">
          {index + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carrousel;
