const VideoItem = ({ title, duration, date, description }) => {
  return (
    <select className="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="">{title}</option>
    </select>
  );
};

export default VideoItem;
