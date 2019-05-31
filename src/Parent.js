import React, { Component } from 'react'
import Child from './Child'

// export default class Parent extends Component
class Parent extends Component {
  constructor (props) {
    super(props)
    // we have a parent Child Relationship, a common design pattern
    // is to keep the state in the parent
    this.state = {
      title: 'Big Money Jean'
    }
  }

  setTitle = (title) => {
    this.setState({ title })
  }
  // The most common way for a child to update the parent's state is
  // by creating a method for the child to update the state with.
  render () {
    const { title } = this.state
    // we passed the title and setTitle to our child.
    return <Child title= {title} setTitle={this.setTitle} />
  }
}

export default Parent
