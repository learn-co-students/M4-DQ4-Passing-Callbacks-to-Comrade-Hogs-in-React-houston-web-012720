import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {

  sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  // sleep = (ms) => {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  panic = () => (<img className="exclamation" src={exclamation} alt="" />)


  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.props.environment === "inhospitable"
        // ? this.sleep(2000).then(()=> {this.panic()})
        ? this.panic()
        : null}
      </div>
    )
  }
}
