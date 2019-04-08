import React, {Component} from 'react';

export default class Enter extends Component {
    constructor(props){
        super(props);
        this.state = {
            mayor: "",
            policeChief: "",
            deputyMayor: "",
            cityManager: "",
            secretaryOfState: "",
            unitedStatesSenators: "",
            cityCouncilChairman: "",
            govenor:""


        }
    }
    render() {
        return <form>
 
<div>           
<label>mayor</label>
<input value={this.state.mayor}
onChange={this.handleChange} />
</div>

<div>   
<label>police chief</label>
<input value={this.state.policeChief}
onChange={this.handleChange} />
</div>

<div> 
<label>deputy mayor</label>
<input value={this.state.deputyMayor}
onChange={this.handleChange} />
</div>

<div> 
<label>city manager</label>
<input value={this.state.cityManager}
onChange={this.handleChange} />
</div>

<div> 
<label>governor</label>
<input value={this.state.governor}
onChange={this.handleChange} />
</div>

<div> 
<label>Secretary of State</label>
<input value={this.state.secretaryOfState}
onChange={this.handleChange} />
</div>

<div>
<label>united states senators</label>
<input value={this.state.unitedStatesSenators}
onChange={this.handleChange} />
</div>

<div>
<label>City Council Chairman</label>
<input value={this.state.cityCouncilChairman}
onChange={this.handleChange} />
</div>
        </form>;
    }
}