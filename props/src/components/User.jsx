import PropTypes from 'prop-types';

User.propTypes = {
    serverStatus: PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        friends: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

User.defaultProps = {
    serverStatus: 'offline',
    user: {
        name: 'Noname',
        age: 0,
        isLoggedIn: false,
        friends: []
        
    }
}


function User({user,serverStatus}) {
    if(serverStatus === 'offline') return (<p>Server is offline.</p>)


  return (
    <>
        <p>Server Status: {serverStatus}</p>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>John's friends: {user.friends.map((friend,idx) => <span key={idx
        }>{friend}, </span>)} </p>
        {user.isLoggedIn && <p>Kullanıcı giriş yaptı.</p>}
        
     
    </>
  )
}

export default User