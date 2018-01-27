import React from 'react';
import Profile from '../profile';
import Navbar from '../navbar';

class Dashboard extends React.Component{
  render(){
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div>
          <Profile />
        </div>
      </div>
    );
  }
}

export default Dashboard;
