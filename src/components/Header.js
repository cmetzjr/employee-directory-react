import React, { Component } from "react";

class Header extends Component {

    handleInputChange = (value) => {
        console.log(value);
        this.setState({
            employees: this.state.employees.filter(x => x.first.includes(value))
        })
    }


    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <input type="text" onChange={event => this.handleInputChange(event.target.value)} />
            </div>
        )
    }
}

export default Header;