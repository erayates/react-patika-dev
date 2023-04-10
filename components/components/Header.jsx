function Header() {
    const user = {
        name: 'John',
        age: 30,
        isLoggedIn: true
    }


    return (
        <div>
            <p>This is the Header Component.</p>
            <p>My name is {user.name} and I am {user.age} years old.</p>
            {user.isLoggedIn && <p>User is logged in.</p>}
        </div>
    )
}

export default Header