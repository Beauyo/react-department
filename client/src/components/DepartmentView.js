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



    render() {
        const { name, } = this.state.department;
        return (
            <div>
                <Segment>
                    <Header as="h1">{ name }</Header>
                </Segment>
                <Button
                color="black"
                onClick={this.props.history.goBack}
                >
                Back
                </Button>

                <Items departmentId={this.props.match.params.id} />
            </div>
        )
    }
}

export default DepartmentView;