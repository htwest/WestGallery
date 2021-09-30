import { useState, useEffect } from "react";

const Header = () => {
  const [fade, setFade] = useState("header-in");

  useEffect(() => {
    window.addEventListener("scroll", handleFade);
    return () => {
      window.removeEventListener("scroll", handleFade);
    };
  }, []);

  const handleFade = () => {
    let scroll = window.scrollY;
    if (scroll > 50) {
      setFade("header-out");
    }
    if (scroll < 50) {
      setFade("header-in");
    }
  };

  return (
    <div className={fade}>
      <p className="quote quote-one">Two roads diverged.</p>
      <p className="quote quote-two">I Doubted if I should ever Return</p>
      <p className="quote quote-three">I took the One less traveled by</p>
      <p className="quote quote-four">
        And that has made All the difference...
      </p>
    </div>
  );
};

export default Header;
