import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoading: true}

  onSubscribe = () => {
    this.setState(prevState => ({isLoading: !prevState.isLoading}))
  }

  getButtonText = () => {
    const {isLoading} = this.state

    return isLoading ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
