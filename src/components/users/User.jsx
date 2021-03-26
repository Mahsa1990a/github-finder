import React, { Component } from 'react'

class User extends Component {

  //It will fire off right away as soon as this component loaded:
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  render() {

    //pulling all name, ... from this.state.user
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;


    return (
      <div>
        User
      </div>
    )
  }
}

export default User
