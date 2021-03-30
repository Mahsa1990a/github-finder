import React, { useContext, useState } from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

// class Search extends Component { Refactoring into functional component
// const Search = ({ showClear, clearUsers, setAlert }) => { update to after moving them from App into GithubState:
const Search = () => {
  const githubContext = useContext(GithubContext); //useContext is a hook
  const alertContext = useContext(AlertContext);


  //when we have form we want to attach state to the input:
  // state = {
  //   text:''  //it's gonna be empty by default
  // }    UPDATE TO:
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();  //we have it with submit form
    // console.log(this.state.text)

    //if we press serach without writing anything in serach box we get alert:
    if (text === '') {
      // this.props.setAlert('Please Enter Something', 'light'); UPDATE TO:
      alertContext.setAlert('Please Enter Something', 'light');
    } else {

      // searchUsers(this.state.text); //we want to pass it up to App  // UPDATE TO:
      // searchUsers(text); //we want to pass it up to App  ... update:
      githubContext.searchUsers(text);
  
      //clear form after it:
      // this.setState({ text: '' }); UPDATED TO:
      setText(''); 
    }
  };

  //onChange event for when we type sth in the input, it's Firing off and update the state 
  const onChange = (e) => {   // e is even parameter
    // this.setState({ text: e.target.value });  //we set the setState to wathever we type in the box

    //if we have text or email or pass we can use name :
    // this.setState({ [e.target.name]: e.target.value }); // so now we can use this onChange event for all input if we need //UPDATE TO:
    setText(e.target.value); // so now we can use this onChange event for all input if we need
  }


  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type="text" name='text' placeholder='Search Users...' value={text} onChange={onChange}/>
        <input type="submit" value='Search' className='btn btn-dark btn-block'/>
      </form>
      {/* So after we searched for user will show clear button not before */}
      {/* {showClear && we no longer have it so: */}
      {githubContext.users.length > 0 &&
        <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>
      }
    </div>
  )
}

// Search.propTypes = {
//   // searchUsers: PropTypes.func.isRequired,
//   // clearUsers: PropTypes.func.isRequired,
//   // showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired
// };

export default Search;
