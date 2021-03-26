import React, { Component } from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';

class User extends Component {

  //It will fire off right away as soon as this component loaded:
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired
  };

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

    const { loading } = this.props;

    return (
      <div>
        {name}
      </div>
    )
  }
}

export default User
