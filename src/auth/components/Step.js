import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
// import apiUrl from '../../apiConfig'
// import Button from 'react-bootstrap/Button'

class Step extends Component {
  constructor () {
    super()

    this.state = {
      edit: false
    }
  }
  render () {
    const { user, steps } = this.props

    return (
      <Fragment>
        <ListGroup>
          { user && steps.map(step => (
            <ListGroup.Item key={step.id}>
              <span className="h5 d-block">{step.title}</span>
              <span className="d-block">{step.url}</span>
              <br/>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Fragment>
    )
  }
}

export default Step
