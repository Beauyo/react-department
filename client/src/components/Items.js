
import React from "react";
import axios from 'axios'
import { Card, Header, } from "semantic-ui-react";

class Items extends React.Component {
  state = { items: [] }

    componentDidMount() {
        const { departmentId } = this.props
        axios.get(`/api/departments/${departmentId}/items`)
            .then( res => {
                this.setState({ items: res.data })
            })
    }

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <h2>No items</h2>
    return items.map( product => (
      <Card>
        <Card.Content>
          <Card.Header>{ product.name }</Card.Header>
          <Card.Meta>{ product.department }</Card.Meta>
          <Card.Description>
            { product.description }
          </Card.Description>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">items</Header>
        <br />
        <Card.Group>
          { this.renderItems() }
        </Card.Group>
      </div>
    )
  }
}

export default Items;