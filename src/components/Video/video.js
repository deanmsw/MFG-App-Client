
const Video = (props) => {
  const vid = props.task;
  // console.log(props.task);
  return (
    <div className="weather-card">
      <div className="box-content h-80 w-25rem p-4 border-4 ...">
      <iframe width="440" height="315" src="https://www.youtube.com/embed/g4Vr0jsZSeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )

}



export default Video;
