import React from "react";
import {useSelector} from 'react-redux'
// add any needed imports here

function Users() {
  const usersArr = useSelector((state) => { return state.users})
  console.log(usersArr)
  const user = usersArr.map(user => {
    return <li>{user.username}</li>
  })
  
  return (
    <div>
      <ul>
        Users!
        {user}
        {usersArr.length}
      </ul>
    </div>
  );
}

export default Users;
