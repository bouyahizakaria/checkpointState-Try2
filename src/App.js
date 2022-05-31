import React from "react";
import './App.css';
import Compteur from "./Compteur";

class App extends React.Component {
  state = {
    fullName: 'GoMyCode CheckPoint',
    bio: 'My name is Bouyahi zakaria . I am web development student at GoMyCode',
    imgSrc: 'https://www.mojomedia.pro/wp-content/uploads/1_9npnpvh7inj64koq7ecw5a.jpeg',
    profession: 'Stand Out program scholarship holder ',
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1>Show the count</h1>
        <Compteur />
        </>
      </div>
    );
  }
}

export default App;
