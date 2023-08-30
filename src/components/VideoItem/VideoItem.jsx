const VideoItem = ({ list_data }) => {
  let videoItemsCourse = list_data.map(
    ({ title, duration, date, description }, index) => {
      return <option key={index}>{title}</option>;
    }
  );

  return (
    <select className="form-select" aria-label="Default select example">
      <option value="0" selected disabled> Selecciona una opcion</option>
      {videoItemsCourse}
    </select>
  );
};

export default VideoItem;
