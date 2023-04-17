import { useState} from 'react'

import { useUser} from '../context/UserContext'

function Profile() {
    const {user,setUser } = useUser()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setUser({ 
                id: 1,
                username: "John Doe",
                bio: "lorem ipsum dolor"
            })
            setIsLoading(false)
        }, 1500)
    }

  return (
    <div>
        {isLoading ? "Loading..." : "LOADED!"}
        
        <br></br>
        
        <button onClick={handleLogin}>Login</button>
        
        <br></br>    
        <code>
            {JSON.stringify(user)}
        </code>
    </div>
  )
}

export default Profile