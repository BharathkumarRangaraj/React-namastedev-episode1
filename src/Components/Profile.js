import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 1};
    console.log('profe constructor')
  }
 ;
  componentDidMount(){
    console.log('profe did mount');
    
  }
  componentDidUpdate(){
    clearInterval(Note);
  
    this.setState({color: 2});
    console.log('componentDdupdate')
  }
  componentWillUnmount(){
    

  }
  
  render() {
    console.log('profe render');
    return <h2>I am a Car{this.props.name} {this.state.color}!</h2>;
  }
}
export default Profile;
