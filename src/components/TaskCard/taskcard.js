
import './taskcard.css';

const TaskCard = (props) => {
  const task = props.task;
  // console.log(props.task);
  return (
    <div className="taskcard-container">
      <div className="taskcard-slide">
      <h1>{task.title} </h1>
      <p> {task.description} </p>
      </div>
    </div>
  )

}



export default TaskCard;
