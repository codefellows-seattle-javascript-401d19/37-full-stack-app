import React from 'react';
import WavForm from '../wav-form';
import Navbar from '../navbar';

class Wav extends React.Component{
  render(){
    return(
      <div>
        <header>
          <Navbar />
        </header>
        <p>Select a wav file to upload</p>
        <WavForm />
      </div>
    );
  }
}

export default Wav;
