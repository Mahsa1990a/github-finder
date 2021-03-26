import React, { Component } from 'react'

class User extends Component {

  //It will fire off right away as soon as this component loaded:
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  render() {
    return (
      <div>
        User
      </div>
    )
  }
}

export default User
