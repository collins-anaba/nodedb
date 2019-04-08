import React, { Component } from "react";
import navbar from "./img/navbar.jpg";
import Enter from "./components/Enter.js";
import mayorRawlings from "./img/mayor-rawlings.jpg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      keyword2: "",
      officialsName: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    if (this.state.keyword === "") {
      this.setState({ officialsName: [] });
    } else
      axios.get("/api/officialsName/" + this.state.keyword).then(res => {
        this.setState({ officialsName: res.data, keyword: "" });
      });
  }
  handleClick2() {
    if (this.state.keyword2 === "") {
      this.setState({ officialsName: [] });
    } else
      axios.get("/api/officialStateName/" + this.state.keyword2).then(res => {
        this.setState({ officialsName: res.data, keyword2: "" });
      });
  }
  render() {
    let officialsName = this.state.officialsName.map(official => {
      return (
        <div>
          <img src={official.photo} />,<h2>{official.title}</h2>,
          <h2>{official.name}</h2>,<h2>{official.email}</h2>
          <h2>{official.phoneNumber}</h2>
        </div>
      );
    });
    return (
      <main className="container">
        <h1>Who's who of civil servants: Dallas</h1>
        <img src={navbar} alt="picture of texas and dallas flag" />
        <h1>Who is my local offical?</h1>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          value={this.state.keyword}
          onChange={e => this.setState({ keyword: e.target.value })}
        />
        <button onClick={this.handleClick}>Enter</button>

        <h5>type keywords e.g. "Mayor", "Chief of Police"</h5>
        <h1>Who is my state offical?</h1>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          onChange={e => this.setState({ keyword2: e.target.value })}
        />
        <button onClick={this.handleClick2}>Enter</button>

        <h5>type keywords e.g. "Governor", "United States Senator"</h5>

        {/* <h1>My official wishlist</h1>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
        />
        <button onClick={this.handleClick}>Enter</button> */}

        <favOfficals />
        {officialsName}
      </main>
    );
  }
}

export default App;
