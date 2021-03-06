import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from "../layout/Spinner";
import Repos from '../repos/Repos';
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

// const User = ({ loading, repos, user, getUser, getUserRepos, match }) => { UPdate:
const User = ({ match }) => { 

  //initialize GithubContext:
  const githubContext = useContext(GithubContext);

  //they are coming from githubContext not prop anymore
  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  //It will fire off right away as soon as this component loaded:
  // componentDidMount() {
  //   this.props.getUser(this.props.match.params.login);
  //   this.props.getUserRepos(this.props.match.params.login);
  // } UPDATE TO useEffect:

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []); //stop for loop (to mimic componentDidMount)

    //pulling all name, ... from this.state.user
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
// } = this.props.user;

  // const { loading, repos } = this.props;

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
          <a href={html_url} className='btn btn-dark my-1'> Visit GitHub Profile </a>

          <ul>
            <li>
              { login && <Fragment><strong>Username: </strong> {login} </Fragment>}
            </li>
            <li>
              { company && <Fragment><strong>Company: </strong> {company} </Fragment>}
            </li>
            <li>
              { blog && <Fragment><strong>Website: </strong> {blog} </Fragment>}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
}

// User.propTypes = {
//   // getUser: PropTypes.func.isRequired,
//   // loading: PropTypes.bool,
//   // user: PropTypes.object.isRequired,
//   repos: PropTypes.array.isRequired,
//   getUserRepos: PropTypes.func.isRequired
// };

export default User;
