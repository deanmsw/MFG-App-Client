import { Component } from 'react';
import './header.css'


class Header extends Component {

render() {

  return (
    <div>
      <div className="header-container">
        <div id className="grid grid-cols-5 gap-4">

          <div className="col-span-1">
            <img src='./images/My_Family_Garden_Logo.png' alt="My_Family_Garden_Logo" width="300" height="300"/>
          </div>

          <div className="col-span-3">
            <h1> Daily Garden App</h1>
          </div>
          <div className="col-span-1">

          </div>
        </div>
        </div>

        <div id className="header-container-2">


            <img src='./images/My_Family_Garden_Logo.png' alt="MFG My_Family_Garden_Logo" width="300" height="300"/>



            <h1> Daily Garden App</h1>

          </div>
        </div>


  )
}
}




  // <div className="flex flex-nowrap">


export default Header;
