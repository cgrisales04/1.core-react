import VideoList from "./components/VideoList/VideoList";
import { list_course, list_music } from "./data/data";

import style from "./App.module.css";

const App = () => {
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
    </div>
  );
};

export default App;
