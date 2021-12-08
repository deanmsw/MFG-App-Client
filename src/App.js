

import Weather from './components/Weather/weather'
import Header from './components/Header/header'
import TaskList from './components/TaskList/tasklist'
import Calendar from './components/Calendar/calendar'
import Video from './components/Video/video'
import './index.css';


function App() {
  return (

    <div>

      <div> 
        <Header />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ...">
            <TaskList />

          </div>

          <div className="weather-card">
            <Weather />
            <Video />
        </div>
      </div>


      <div>
        <Calendar />
      </div>

    </div>
  );
}

export default App;
