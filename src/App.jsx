import VideoList from "./components/VideoList/VideoList";
import { list_course, list_music } from "./data/data";

import FormControlado from "./components/FormControlado/FormControlado";

import style from "./App.module.css";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import { useState } from "react";

const App = () => {
  const [showLifeCycle, setShowLifeCycle] = useState(false);

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Categoria de musica</h2>
      <div className="d-flex">
        <VideoList
          title="Programacion"
          className={style.card_zoom}
          playlist={list_course}
        ></VideoList>

        <VideoList title="Music" playlist={list_music}></VideoList>
      </div>
      <hr />
      <FormControlado></FormControlado>
      <button
        className="btn btn-success mt-3"
        onClick={() => setShowLifeCycle(!showLifeCycle)}
      >
        {showLifeCycle ? "Ocultar" : "Mostrar"}
      </button>
      <hr />
      {showLifeCycle && <LifeCycle></LifeCycle>}
    </div>
  );
};

export default App;
