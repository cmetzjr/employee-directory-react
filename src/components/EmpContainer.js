import React, { Component } from "react";
import API from "../utils/API";

class EmpContainer extends Component {
    //set initial state for 2 arrays
    state = {
        employees: [],
        empFiltered: []
    };

   
    //API call for random user data, map the employee data that I want, and set state for both arrays
    getEmployees = async () => {
        try {
            const res = await API.getDummyEmp();
            const empInfo = res.data.results.map(emp=>({
                pic: emp.picture.thumbnail,
                last: emp.name.last,
                first: emp.name.first,
                phone: emp.phone,
                email: emp.email,
                id: emp.id.value                 
            }))
            this.setState({ employees: empInfo, empFiltered: empInfo })
        } catch (err){
            console.log(err)
        };
    };

    
    //call getEmployees
    componentDidMount() {
        this.getEmployees();
    }

    //this function will take the search parameters and will update the state of the empFiltered array based on filtering of the employees array
    handleInputChange = (value) => {
        this.setState({
            empFiltered: this.state.employees.filter(x => x.last.includes(value))
        });
    }

    render() {
        return (            
            <div>
                <div className="mb-4">
                    <h1 className="text-center mb-4">Employee Directory</h1>
                    <label className="mr-4" htmlFor="text">Search for employees:</label>
                    {/* letters typed into the input box (=value) become the parameter of handleInputChange */}
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
                    {/* maps the empFiltered array and renders it to the table */}
                    {this.state.empFiltered.map(empInfo=>
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