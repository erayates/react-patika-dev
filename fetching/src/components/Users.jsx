import  {useState,useEffect} from 'react'
import axios from 'axios'


function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    
        axios('https://dummyjson.com/users')
            .then(res => {
                setUsers(res.data.users);
           
                setIsLoading(false);
                console.log(users)
            })
            .finally(setIsLoading(false))
            
    }, [])
    return (
        <div>
        <h1>Users</h1>
        <hr></hr>
        {isLoading ? <h3>Loading...</h3> : null}
        {users.map((user,idx) => {
            return (
                <div key={idx}>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <h4>{user.email}</h4>
                    <p>{user.address.address}</p>
                    <p>{user.address.city}, {user.address.state}</p>
                    <p>{user.address.zip}</p>
                    <p>{user.address.country}</p>
                    <p>{user.phone}</p>
                    <p>{user.username}</p>
                    <p>{user.password}</p>
               

                    
                    <hr></hr>
                </div>
                
            )
        })}    
    </div>
    
    )
}

export default Users