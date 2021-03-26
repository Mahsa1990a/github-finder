import React, { Component, Fragment } from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

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

    if (loading) {
      return <Spinner />
    }

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'> Back To Search</Link>
        {/* If someone is hirebale show green check */}
        Hireable: {' '}
        { hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger'/> }

        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className='round-img' alt="Avatar" style={{width: '150px'}}/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {/* some users may not have a bio so we say if bio is true && ... */}
            { bio && <Fragment><h3>Bio</h3><p>{bio}</p></Fragment>}
            <a href={html_url} className='btn btn-dark my-1' target='_blank'> Visit GitHub Profile </a>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default User
