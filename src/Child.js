import React, { Component, Fragment } from 'react'

class Child extends Component {
  handleChange = event => {
    const title = event.target.value
    const { setTitle } = this.props
    // The child updates the parent's title (state)
    // anytime someone types in the input
    setTitle(title)
  }

  render () {
    const { title } = this.props
    const { handleChange } = this
    return (
      <Fragment>
        <h3>{title}</h3>
        <input onChange={handleChange} placeholder='Enter Title...' />
      </Fragment>
    )
  }
}

export default Child
