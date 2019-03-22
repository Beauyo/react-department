import styled from "styled-components"
import { Link, } from 'react-router-dom'
import React from "react";
import axios from 'axios'
import { Card, Header, Button, Icon } from "semantic-ui-react";

class Items extends React.Component {
  state = { items: {} }

    componentDidMount() {
        const  { departmentId, } = this.props
        axios.get(`/api/departments/${departmentId}/items/`)
            .then( res => {
                this.setState({ items: res.data })
            })
    }

    deleteItems = (id) => {
        axios.delete(`/api/departments/${this.props.departmentId}/items/${id}`)
            .then( res => {
                const { items, } = this.state
                this.setState({ items: items.filter( t => t.id !== id)})
            })
    }

  renderItems = () => {
    const { items, } = this.state;
    const  { id, departments_id }  = this.props
    if (items.length <= 0)
      return <h2>No items</h2>
    return items.map( item => (
      <Card>
        <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
          <Card.Meta>{ item.department }</Card.Meta>
          <Card.Description>
            { item.description }
          </Card.Description>
          <Button color="red" onClick = {() => this.deleteItems(item.id)}>Delete</Button>
          <Link to={`/departments/${departments_id}/items/${id}/edit`}>
            <Button inverted color='blue'>
                <Icon name='pencil' />
                Update Item
            </Button>
          </Link>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header fSize="large" as={HeaderText}>items</Header>
        <br />
        <Card.Group>
          { this.renderItems() }
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



export default Items;