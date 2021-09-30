import { useState, useEffect } from "react";

const Fog = () => {
  const [fade, setFade] = useState("fog-in");

  useEffect(() => {
    window.addEventListener("scroll", handleFade);
    return () => {
      window.removeEventListener("scroll", handleFade);
    };
  }, []);

  const handleFade = () => {
    let scroll = window.scrollY;
    if (scroll > 50) {
      setFade("fog-out");
    }
    if (scroll < 50) {
      setFade("fog-in");
    }
  };

  return (
    <div className="fog-container">
      <video className={fade} autoPlay="autoplay" muted loop>
        <source src="/Fog.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Fog;
