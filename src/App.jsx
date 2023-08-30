import VideoItem from "./components/VideoItem/VideoItem";
import VideoList from "./components/VideoList/VideoList";

const list_course = [
  {
    title: "Node Js",
    duration: "24 hrs",
    date: "00-00-00",
    description: "Introducción a Curso de Node JS",
  },
];

const App = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Categoria de musica</h2>
      <div className="d-flex">
        <VideoList title="Programacion">
          <VideoItem title="A" duration="" date="" description=""></VideoItem>
        </VideoList>

        <VideoList title="Music">
          <VideoItem title="B" duration="" date="" description=""></VideoItem>
        </VideoList>
      </div>
    </div>
  );
};

export default App;
