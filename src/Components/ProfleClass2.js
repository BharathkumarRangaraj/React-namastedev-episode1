import React from "react";
class ProfleClass extends React.Component {
    constructor(){
        super();
        this.state = {color: "red"};
        console.log('profeclass2 const')
    }
    componentDidMount(){
        console.log('profeclass2 did mount')
      }
    render(){
        console.log('profeclass2 render')
        return <h1>dhfh</h1>
    }
}
export default ProfleClass;