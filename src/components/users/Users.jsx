import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

// class Users extends Component {

//   // state = {
//   //   users: [
//   //     {
//   //       id: '1',
//   //       login: 'mojombo',
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //       html_url: 'https://github.com/mojombo'
//   //     },
//   //     {
//   //       id: '2',
//   //       login: 'defunkt',
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//   //       html_url: 'https://github.com/defunkt'
//   //     },
//   //     {
//   //       id: '3',
//   //       login: 'pjhyett',
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//   //       html_url: 'https://github.com/pjhyett'
//   //     }
//   //   ]
//   // }              NO NEED Them because They are coming from props
//   render() {
//     return (
//       <div style={userStyle}>
//         {/* Loop through Users */}
//         {/* {this.state.users.map(user => (   UPDATE IT TO PROPS*/}
//         {this.props.users.map(user => (
//           <UserItem key={user.id} user={user}/>
//         ))}
//       </div>
//     )
//   }
// }

const Users = ({ users, loading }) => {

  //initialize GithubContext:
  const githubContext = useContext(GithubContext)

  if (loading) {
    return <Spinner />
  } else {
    return(
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
