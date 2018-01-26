import React from 'react';
import Profile from '../profile';
import Wav from '../wav';
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
          <Wav />
        </div>
      </div>
    );
  }
}

export default Dashboard;
