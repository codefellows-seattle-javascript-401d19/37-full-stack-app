import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class AuthRedirect extends React.Component{
  render(){
    let {location, history, token} = this.props;
    //pathname is the url on the location object
    let {pathname} = location;
    let destinationRoute = null;

    if(pathname === '/signup' || pathname === '/login' || pathname === '/'){
      if(token){
        destinationRoute = '/dashboard';
      }
    }else {
      if(!token){
        destinationRoute = '/';
      }
    }

    return (
      <div>
        <div>testing</div>
        {destinationRoute ? <Redirect to={destinationRoute} /> : undefined}
      </div>
    );}
}

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);
