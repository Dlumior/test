import React, { useState } from "react";

import Post from "../Networking/Post.js";

const Form = () => {
  const [texto, setTexto] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [res, setRes] = useState({
    title: "texto",
    body: "cuerpo",
    userId: -1,
  });

  const handleTexto = (e) => {
    setTexto(e.target.value);
  };

  const handleCuerpo = (e) => {
    setCuerpo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: texto,
      body: cuerpo,
      userId: 1,
    };
    const respuesta = await Post(data);
    console.log(respuesta);

    setRes(respuesta);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Titulo</label>
        <input
          type="text"
          placeholder="Ingrese un texto"
          value={texto}
          onChange={handleTexto}
        />
        <br />
        <label>Cuerpo</label>
        <input type="text" value={cuerpo} onChange={handleCuerpo} />
        <br />
        <button type="submit">Postear</button>
      </form>
      <h5>Titulo</h5>
      <p>{res.title}</p>
      <h5>Cuerpo</h5>
      <p>{res.body}</p>
    </div>
  );
};

export default Form;
