import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ title = "", playlist = [] }) => {
  return (
    <div className="card m-2">
      <div className="card-body ">
        <h5 className="card-title">{title}</h5>
        <ul>
          {playlist.map((item, index) => (
            <VideoItem {...item} key={`video_item_${index}`}></VideoItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoList;
