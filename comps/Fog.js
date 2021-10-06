import { useState, useEffect } from "react";

const Fog = () => {
  const [fade, setFade] = useState("fog-in");
  const [min, setMin] = useState("fog-container");

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
      setMin("fog-min");
    }
    if (scroll < 50) {
      setFade("fog-in");
      setMin("fog-container");
    }
  };

  return (
    <div className={min}>
      <video
        className={fade}
        src="/Fog.mp4"
        autoPlay="autoplay"
        playsInline
        muted
        loop
      />
    </div>
  );
};

export default Fog;
