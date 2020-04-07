import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  // sleep = (milliseconds) => {
  //   const date = Date.now();
  //   let currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }

  throwAFit = () => {
    // if (this.state.panicked) return
    // setTimeout(()=>{this.props.alterEnvironment("inhospitable")}, 2000)
    // this.setState({ panicked: true },
    //   ()=>{
    //     this.exclaim()
    //     setTimeout(()=>{this.relax()}, 4000)
    //   })

    this.props.alterEnvironment("inhospitable")
    setTimeout(()=>{this.relax()}, 2000)
  }

  relax = () => {
    this.props.alterEnvironment('docile')
    this.setState({ panicked: false })
    console.log('chill')
  }

  exclaim = () => {
    if (this.state.panicked) return
    this.setState({panicked: true})
    console.log('Panicked!')
    this.exclaimAudio.play()
    this.squeelAudio.play()
    // event listener in constructor invokes throwAFit after exclaim audio finishes playing
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
