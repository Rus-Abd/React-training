import React, { useState } from 'react'
import axios from 'axios'
import responseType,{ServerData,ServerResponse,AxiosResponse} from '../../Types/response'
import UserItem from '../UserItem/UserItem'
import user from '../../Types/userType'
const UserList = () => {
    const [users,setUsers]=useState<responseType[]>([])
   function getUsers(){
      (axios.get<responseType>('https://jsonplaceholder.typicode.com/users/') ).catch(err=>{
           console.log(err)
       }).then(response =>{
            // setUsers({response.data})
           console.log(response.data)
       })
   }
   getUsers()
  return (
    <div className='user-list'>{users.map(user=>{
        return <UserItem name={user.name} city={user.address.city} company={user.company.name}></UserItem>
    })}</div>
   
  )
}

export default UserList