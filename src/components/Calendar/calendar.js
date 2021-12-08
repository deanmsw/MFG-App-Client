import { Component } from 'react';
import axios from 'axios';
// import './tasklist.css';

class Calender extends Component {
  constructor() {
      super();
      this.state = {
        days: [],
      };
    }
    // componentDidMount() {
    //
    //   // Call the server to get task json data
    //     axios('http://localhost:3000/days.json').then((response) => {
    //
    //     // Sets the state for the task card
    //     const res = response.data;
    //     console.log(res);
    //     this.setState({ days: response.data });
    //   });
    // }

render() {
  // get current date to use with filter()
  // const dateToday = new Date();
  // const dd = String(dateToday.getDate()).padStart(2, '0');
  // const mm = String(dateToday.getMonth() + 1).padStart(2, '0');

    return (
      <div className="tasklist-container">
        <h1>All Days </h1>
        { this.state.days.map((day) => <h2 key={ day.id } day={ day }></h2> ) }
      </div>
    )
  }
}

export default Calender;
