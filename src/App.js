import React, { Component } from 'react';
import './App.css';
import Image from ".Asset/Image/Tinubu1.png"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Bola Tinubu',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: ".Asset/Image/Tinubu1.png",
        profession: 'Software Developer'
      },
      shows: false,
      interval: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ interval: prevState.interval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (
          <div className="profile">
            <h1>{fullName}</h1>
            <img src={Image} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time interval since last component mounted: {this.state.interval} seconds</p>
      </div>
    );
  }
}

export default App;
