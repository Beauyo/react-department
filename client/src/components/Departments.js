import React from "react";
import axios from "axios";
import { Card, Header, Button } from "semantic-ui-react";
import { Link, } from "react-router-dom"
import styled from "styled-components"
import DepartmentsForm from './DepartmentsForm'


class Departments extends React.Component {
    state = { departments: [] };

    toggleEdit = () => this.setState({ editing: !this.state.editing })
    editDepartment = (id) => { 
        axios.put(`/api/departments/${id}`, this.state.departments.name)
        .then( res => {
            const departments = this.state.departments.map( t => {
                if (t.id === id)
                return res.date;
                return t;
            })
            this.setState({ departments })
        })

    }

    componentDidMount() {
        axios.get("/api/departments")
        .then( res => { 
            this.setState({ departments: res.data, });
        })
    }


    deleteDepartment = (id) => { 
        axios.delete(`/api/departments/${id}`)
        .then( res => { 
            const { departments, } = this.state;
            this.setState({ departments: departments.filter( t => t.id !== id), }) 
        })
    }

    renderDepartments = () => {
        const { departments, } = this.state;

        if (departments.length <= 0)
        
        return <h2>No departments</h2>
        return departments.map( department => (
            <Card>
                   <Card.Content>
                    {
                        this.state.editing ?
                            <DepartmentsForm name={department.name} id={department.id} editDepartment={this.editDepartment} />
                            :
                            <Card.Header as={Link} to={`/departments/${department.id}`} >{department.name}</Card.Header>
                    }
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={this.toggleEdit}>Edit</Button>
                    <Button as={Link} to={`/departments/${department.id}`} color='blue'>View</Button>
                    <Button color="red" onClick = {() => this.deleteDepartment(department.id)}>Delete</Button>
                </Card.Content>
            
            </Card>
        ))
    }

    render() {
        return (
            <div>
                <Header fSize="large" as={HeaderText}>Departments</Header>
                <br />
                <Button as={Link} to="/" color="blue">Home</Button>
                <br />
                <br />
                <Button as={Link} color="blue" to="/departments/new">Add Department</Button>
                <br />
                <Card.Group>
                    { this.renderDepartments() }
                </Card.Group>
            </div>
        )
    }
}

const fontSize = (size) => {
    switch (size) {
      case "large":
      return "40px";
      case "small":
      return "25px";
      default:
      return "20px";
    }
  }
  
 export const HeaderText = styled.h1`
    color: white !important;
    text-align: center;
    font-size: ${ props => fontSize(props.fSize)  } !important;
  `

 

export default Departments;