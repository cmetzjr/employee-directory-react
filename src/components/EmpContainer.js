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
            console.log(res);
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

    render() {
        console.log(this.state.employees)
        return (
            
                <table>
                    <thead>
                        <tr>
                            <td>Photo</td>
                            <td>Last Name</td>
                            <td>First Name</td>
                            <td>Phone</td>
                            <td>Email</td>
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
        )
            
    };
}

export default EmpContainer;