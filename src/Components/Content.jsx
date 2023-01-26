import React, { useState } from "react";
import "./content.css";
import imagen from "../Assets/imagen1.jpg";
const Home = ({ setSelectedTab }) => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Pintura al horno Ricardo Biselli en Rosario y alrededores</h1>
        <div className="home-content-content">
          <img alt="taller de pintura al horno rosario" src={imagen}></img>
          <p>
            Servicio de pintura al horno: bicicletas, motos, autopartes, tapas
            de valvulas, filtros ,esmaltes, barnices, purpurinas, 100 colores,
            tonos mate, semimate, brillantes, laqueados. Dos o mas combinaciones
            de colores en la misma pieza. Prepintado quimico desincrustado,
            arenados. Fileteados. Se pinta cualquier pieza metalica ya sea
            nueva, usada y en las condiciones en que se encuentre: oxidada,
            pintada, cromada, zincada, etc. Apto para piezas de madera o fibra
            de vidrio, piezas plasticas. Atencion a comisionistas de todo el
            pais.
          </p>
          <button
            className="info-button"
            onClick={() => setSelectedTab("contact")}
          >
            MAS INFORMACION
          </button>
        </div>
      </div>
    </div>
  );
};

const Address = ({ isMobile, isTablet }) => {
  return (
    <div className="address-container">
      <div className="address">
        <div className="address-text">
          <p>
            <i className="fa-solid fa-shop"></i> Lunes a Viernes de 8 a 12 y de
            15 a 18, Sabado de 9 a 12
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen"></i>{" "}
            <a href="tel:+543415860803">341 586-0803</a>
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.open(`https://wa.me/${+543415860803}`)}
          >
            <i className="fa-brands fa-whatsapp"></i>{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              341-586-0803
            </span>
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> Colombia 1368, entre
            Forest y Neuquen
            <div>Rosario - Santa Fe</div>
          </p>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2539307647135!2d-60.71820598427681!3d-32.94430457910086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7acd49b515e5f%3A0x159cbf26504c8224!2sColombia%201368%2C%20S2008JMD%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1674629128188!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="iframe"
        ></iframe>
      </div>
      {isMobile || isTablet ? "" : <Contact></Contact>}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add code here to send the form data to your server or use a third-party library like Axios to make a POST request.
    // You can also add a message to show that the form was sent successfully
  };

  return (
    <div className="contactUs">
      <div className="contact-text"></div>
      <p>Contacto</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Nombre"
          />

          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
          />
          <br />
          <input
            type="number"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            className="form-control"
            placeholder="Telefono"
          />
          <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Mensaje"
          />
        </div>
        <br />
        <button type="submit" className="form-submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export { Home, Address, Contact };
