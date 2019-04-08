import React, { Component } from "react";
import axios from "axios";

export default class officialsName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officialsName: [
        {
          photo: "<<http://img src={mayorRawlings} alt='picture of Mike Rawlings' />",
          title: "Mayor",
          name: "Mike Rawlings",
          email: "mike.rawlings@dallascityhall.com",
          phoneNumber: "214.670.0646"
        },

        {
          photo: "<img src={adam-moreno} alt='picture of Adam Moreno' />",
          title: "Deputy Mayor",
          name: "Adam Moreno",
          email: "adam.moreno@dallascityhall.com",
          phoneNumber: "214.670.4048"
        },

        {
          photo: "<img src={casey-thomas} alt='picture of Casey Thomas' />",
          title: "City Council Chairman",
          name: "Casey Thomas",
          email: "casey.thomas@dallascityhall.com",
          phoneNumber: "214.670.0772"
        },

        {
          photo: "<img src={tc-broadnax} alt='picture of T.C. Broadnax' />",
          title: "City Manager",
          name: "T.C. Broadnax",
          email: "tc.broadnax@dallascityhall.com",
          phoneNumber: "214.670.3297"
        },

        {
          photo: "<img src={renee-hall} alt='picture of Renee Hall' />",
          title: "Chief of Police",
          name: "Renee Hall",
          email: "dpd@dallascityhall.com",
          phoneNumber: "214.670.4420"
        },
    ],
        officialsStateName: [

        {
          photo: "<img src={greg-abbott} alt='picture of Greg Abbott' />",
          title: "Govenor",
          name: "Greg Abbott",
          email: "govenor@governor.texas.gov",
          phoneNumber: "512.463.2000"
        },

        {
          photo: "<http://img src={david-whitley} alt='picture of David Whitley' />",
          title: "Secretary of State",
          name: "David Whitley",
          email: "secretary@sos.texas.gov",
          phoneNumber: "512.463.5770"
        },

        {
          photo:
            "<img src={ted-cruz-john-cornyn} alt='picture of Ted Cruz & John Cornyn' />",
          title: "United States Senator",
          name: "Ted Cruz & John Cornyn",
          email: "ted.cruz@mail.senate.gov,john.cornyn@mail.senate.gov",
          phoneNumber: "214.599.8749 ,202.224.2934"
        }
      ]
    };
  }

  componentDidMount() {
    axios.get("api/officialsName").then(res => {
      this.setState({ officialsName: Response.data });
    });
  }

  componentDidMount() {
    axios.get("api/officialsStateName").then(res => {
      this.setState({ officialsName: Response.data });
    });
  }
  enter(title) {
    axios.get("api/officialsName" + title);
  }
  enter(title) {
    axios.get("api/officialsStateName" + title);
  }

  render() {
    return (
      <form>
        <label>Enter</label>
        <input />
      </form>
    );
  }
}
