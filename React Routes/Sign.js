import React, { Component } from "react";

class Sign extends Component {
    render() {
        return(
        <div className="Cha">
            <form>
                <label>ENTER THE USERNAME:</label>
                <input type="text" id="123"></input>
                <br></br>
                <label>ENTER THE PASSWORD:</label>
                <input type="password"  id="123"></input>
                <br></br>
                <button>SUBMIT</button>
            </form>
            
        </div>
        );
    }
}
export default Sign;