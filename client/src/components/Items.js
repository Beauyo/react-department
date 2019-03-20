
import React from "react";
import axios from 'axios'
import { Card, Header, Button, } from "semantic-ui-react";

class Items extends React.Component {
  state = { items: [] }

    componentDidMount() {
        const { departmentId } = this.props
        axios.get(`/api/departments/${departmentId}/items`)
            .then( res => {
                this.setState({ items: res.data })
            })
    }

    deleteItems = (id) => {
        axios.delete(`/api/departments/${id}/items/${id}`)
            .then( res => {
                const { items, } = this.state
                this.setState({ items: items.filter( t => t.id !== id)})
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
          <Button color="red" onClick = {() => this.deleteItems(items.id)}>Delete</Button>
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