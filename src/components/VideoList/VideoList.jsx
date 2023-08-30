
const VideoList = ({ title, children }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default VideoList;
