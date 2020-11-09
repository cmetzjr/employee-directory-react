import './App.css';
import React from "react";
import EmpContainer from "./components/EmpContainer";
// import Header from "./components/Header";

handleInputChange = (value) => {
  this.setState({
            employees: this.state.employees.filter(x => x.empInfo.first.includes(value))
        })
    }

function App() {
  return (
    <div>
      <div>
        <h1>Employee Directory</h1>
        <input type="text" onChange={event => this.handleInputChange(event.target.value)} />
      </div>
      <EmpContainer />
    </div>
  )
}

export default App;