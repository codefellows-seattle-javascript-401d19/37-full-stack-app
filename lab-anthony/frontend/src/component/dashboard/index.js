import React from 'react';
import Header from '../header';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Header/>
        <h1>This is the dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
