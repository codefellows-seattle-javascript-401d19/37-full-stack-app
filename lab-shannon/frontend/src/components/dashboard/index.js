import React from 'react';
import Profile from '../profile';
import Wav from '../wav';

class Dashboard extends React.Component{
  render(){
    return (
      <div>
        <h1>Congratulations, you made it to the Dashboard!</h1>
        <Profile />
        <Wav />
      </div>
    );
  }
}

export default Dashboard;
