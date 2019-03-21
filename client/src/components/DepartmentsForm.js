import React from 'react';
import { Form, Header, } from 'semantic-ui-react';
import axios from 'axios';


class DepartmentForm extends React.Component {
    state = { name: [], }

    handleSubmit = (e) => {
        e.preventDefault()
        const { id, editDepartment } = this.props
        const department = this.state
        if (id) 
            axios.put(`/api/departments/${id}`, department)
            .then( res => {
                editDepartment(id)
            })
        else
            axios.post('/api/departments', department )
                .then( res => {
                    this.props.history.push('/')
                })
        this.setState({ name: '' })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const department = { ...this.state };
    //     axios.post("/api/departments", department)
    //     .then( res => {
    //         this.props.history.push("/")
    //     })
    //     this.setState({ ...this.state.name})
    // }

    handleChange = (e) => {
        const { target: { name, value } } =e;
        this.setState({ [name]: value, });
    }

    render() {
        const { name } = this.state;

        return (
            <div>
                <Header as="h1">New Department</Header>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equals">
                <Form.Input
                label="Name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
                required
                />
                </Form.Group>
                <Form.Button color="blue" onClick={this.handleSubmit}>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default DepartmentForm