import React, { Component } from "react";
import API from "../utils/API";

class EmpContainer extends Component {
    //set initial state
    state = {
        employees: []
    };

   
    //get random employee data
    componentDidMount() {
        this.getEmployees();
    }

    //API call for random user data, take the employee data that I want, and set state
    getEmployees = async () => {
        try {
            const res = await API.getDummyEmp();
            const empInfo = res.data.results.map(emp=>({
                pic: emp.picture.thumbnail,
                last: emp.name.first,
                first: emp.name.last,
                phone: emp.phone,
                email: emp.email,
                id: emp.id.value                 
            }))
            this.setState({ employees: empInfo})
        } catch (err){
            console.log(err)
        };
    };

     handleInputChange = (value) => {
        console.log(value);
        this.setState({
            employees: this.state.employees.filter(x => x.first.includes(value))
        })
    }

    render() {
        return (            
            <div>
                <div className="mb-4">
                    <h1 className="text-center mb-4">Employee Directory</h1>
                    <label className="mr-4" htmlFor="text">Search for employees:</label>
                    <input type="text" onInput={event => this.handleInputChange(event.target.value)} />
                </div>
            
            <table className="table table-sm">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(empInfo=>
                    <tr key={empInfo.id}>                            
                        <td><img src={empInfo.pic} alt="employee headshot"></img></td>
                        <td>{empInfo.last}</td>
                        <td>{empInfo.first}</td>
                        <td>{empInfo.phone}</td>
                        <td>{empInfo.email}</td>
                    </tr>
                    )};
                </tbody>
            </table>
            </div>
        )
            
    };
}

export default EmpContainer;