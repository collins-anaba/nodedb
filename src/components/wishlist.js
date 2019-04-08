import React, { Component } from "react";
import Axios from "axios";

export class wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favOfficials: []
    };
  }
  componentDidMount() {
    axios.get("/api/wishlist").then(response => {
      this.setState({ wishlist: response.data });
    });
  }
  render() {
    return (
      <section>
        {this.state.wishlist.map(favOfficials => (
            <favOfficials name={favOfficials.name} office={favOfficials.office} key={favOfficals}/>
        ))}
      </section>
    );
  }
}
