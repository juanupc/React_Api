import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [Personas, setPersones] = useState([]);
  useEffect(() => {
    const ObtenerPersonas = async () => {
      const respuesta = await axios.get(
        "https://643809b4c1565cdd4d648155.mockapi.io/Personas"
      );
      setPersones(respuesta.data);
    };
    ObtenerPersonas();
  }, []);
  if (Personas.length === 0) {
    console.log("Cargando Contactos....");
  } else {
  }
  return (
    <div className="App">
      <h1>Contactos</h1>
      <ul>
        {Personas.map((element) => {
          return (
            <li key={element.id}>
              <h3>{element.name}</h3>
              <img src={element.avatar} alt="Imagen" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
