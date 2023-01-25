import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./navBar.css";
import { Home } from "./Content";
import { Address } from "./Content";
import { Contact } from "./Content";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < 600;
  const isTablet = width >= 601 && width <= 900;

  const tabContent = () => {
    switch (selectedTab) {
      case "home":
        return <Home setSelectedTab={setSelectedTab} />;
      case "about":
        return <Address />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  const tabAnimation = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  return (
    <div className="navbar">
      <div className={`navbar__tabs ${isMobile || isTablet ? "mobile" : ""}`}>
        {(isMobile || isTablet) && (
          <i
            className={`fas fa-bars ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <div
          className={`navbar__links ${
            isOpen || !(isMobile || isTablet) ? "open" : ""
          }`}
        >
          <div
            className={`navbar__link ${
              selectedTab === "home" ? "navbar__link--active" : ""
            }`}
            onClick={() => {
              setSelectedTab("home");
              setIsOpen(false);
            }}
          >
            Informacion
          </div>
          <div
            className={`navbar__link ${
              selectedTab === "about" ? "navbar__link--active" : ""
            }`}
            onClick={() => {
              setSelectedTab("about");
              setIsOpen(false);
            }}
          >
            Atencion
          </div>
          <div
            className={`navbar__link ${
              selectedTab === "contact" ? "navbar__link--active" : ""
            }`}
            onClick={() => {
              setSelectedTab("contact");
              setIsOpen(false);
            }}
          >
            Contacto
          </div>
        </div>
      </div>
      <animated.div className="navbar__content" style={tabAnimation}>
        {tabContent()}
      </animated.div>
    </div>
  );
};

export default Navbar;
