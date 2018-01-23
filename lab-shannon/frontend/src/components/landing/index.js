import React from 'react';

class Landing extends React.Component{
  render(){
    let signUpJSX =
      <form>
        <input
          type='text'
          placeholder='username'
        />
        <input
          type='text'
          placeholder='password'
        />
        <input
          type='text'
          placeholder='email'
        />
      </form>;

    let showJSX;
    // let showJSX = token ? signUpJSX : loginJSX;
    return (
      <div>
        {showJSX}
      </div>
    );
  }
}

export default Landing;
