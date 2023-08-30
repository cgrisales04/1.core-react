import VideoItem from "./components/VideoItem/VideoItem";
import VideoList from "./components/VideoList/VideoList";

const App = () => {
  const list_course = [
    {
      title: "Node Js",
      duration: "24 hrs",
      date: "00-00-00",
      description: "Introducción a Curso de Node JS",
    },
    {
      title: "Angular 12",
      duration: "27 hrs",
      date: "00-00-00",
      description: "Introducción a Angular 12",
    },
  ];
  const list_music = [
    {
      title: "Normal AZ",
      duration: "2:45 Min",
      date: "00-00-00",
      description: "Song from Alcolirykoz",
    },
    {
      title: "Chango AZ",
      duration: "3 Min",
      date: "00-00-00",
      description: "Song from Alcolirykoz",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Categoria de musica</h2>
      <div className="d-flex">
        <VideoList title="Programacion">
          <VideoItem list_data={list_course}></VideoItem>
        </VideoList>

        <VideoList title="Music">
          <VideoItem list_data={list_music}></VideoItem>
        </VideoList>
      </div>
    </div>
  );
};

export default App;
