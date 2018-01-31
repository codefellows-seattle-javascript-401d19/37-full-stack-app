import React from 'react';
import Profile from '../profile';

class Dashboard extends React.Component{
  render(){
    return (
      <div>
        <h1>Congratulations, you made it to the Dashboard!</h1>
        <Profile />
      </div>
    );
  }
}

export default Dashboard;
