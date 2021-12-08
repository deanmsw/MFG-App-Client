import { Component } from 'react';
import axios from 'axios';
import './tasklist.css';

import TaskCard from '../TaskCard/taskcard'


class TaskList extends Component {
  constructor() {
      super();
      this.state = {
        tasks: [],
      };
    }
    componentDidMount() {

      // Call the server to get task json data
        axios('http://localhost:3000/tasks.json').then((response) => {

        // Sets the state for the task card
        const res = response.data;
        console.log(res);
        this.setState({ tasks: response.data });
      });
    }

render() {
  // get current date to use with filter()
  let date365 = 0;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

  const leapYear = new Date(currentYear, 1, 29);
    if (leapYear.getDate() === 29) { // If it's a leap year, changes 28 to 29
        monthLength[1] = 29;
    }

    for (let i=0; i < currentMonth; i++ ) {
        date365 = date365 + monthLength[i];
    }
    date365 = date365 + currentDay;

    return (
      <div className="tasklist-container">
        <h1>Todays Tasks </h1>
        { this.state.tasks.filter(task => task.day_number === date365 ).map((task) => <TaskCard key={ task.id } task={ task } /> ) }
      </div>
    )
  }
}




export default TaskList;
