

import Weather from './components/Weather/weather'
import Header from './components/Header/header'
import TaskList from './components/TaskList/tasklist'
import Video from './components/Video/video'
import './index.css';


function App() {
  return (

    <div>

      <div>
        <Header />
      </div>

      <div className="flex flex-col lg:flex-row  gap-4" >
        <div className="col-span-2 ...">
            <TaskList />

          </div>

          <div className="weather-card">
            <Weather />
            <Video />
        </div>
      </div>

    </div>
  );
}

export default App;
