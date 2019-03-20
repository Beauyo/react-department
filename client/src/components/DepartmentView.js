import React from 'react';
import axios from 'axios';
import Items from "./Items"
import { Button, Header, Segment, } from 'semantic-ui-react';


class DepartmentView extends React.Component {
    state = { department: [], };

    componentDidMount() {
        axios.get(`/api/departments/${this.props.match.params.id}`)
        .then( res => {
            this.setState({ department: res.data, });
        })
    }

    deleteDepartment = (id) => {
        axios.delete(`/api/departments/${id}`)
        .then( res => { 
            const { departments, } = this.state;
            this.setState({ departments: departments.filter( t => t.id !== id), })
        })
    }

    render() {
        const { name, } = this.state.department;

        return (
            <div>
                <Segment>
                    <Header as="h1">{ name }</Header>
                </Segment>
                <br />
                <br />
                <Button color="red" onClick={this.deleteDepartment}>Delete</Button>
                <br />
                <br />
                <Button
                color="black"
                onClick={this.props.history.goBack}
                >
                Back
                </Button>
                <br />
                <br />
                <Items departmentId={this.props.match.params.id} />
            </div>
        )
    }
}

export default DepartmentView;