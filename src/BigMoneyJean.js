import React from 'react'

const BigMoneyJean = (props) => {
  const { user } = props
  return (
    <div>
      <h1>Big Money Jean</h1>
      <p>{user.email}</p>
      <p>{user.token}</p>
    </div>
  )
}

export default BigMoneyJean
