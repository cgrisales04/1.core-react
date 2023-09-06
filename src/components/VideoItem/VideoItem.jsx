import Views from "../Views/Views";

const VideoItem = ({ index, title, duration, date, description }) => {
  return <li key={index}>{title} <Views></Views></li>;
};

export default VideoItem;
