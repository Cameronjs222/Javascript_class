import React, {useState} from "react";
const Form = (props) => {
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("")
    // const [password, SetPassword] = useState("")
    
    
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    
    const changeHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = [user.username,user.email,user.password]
        console.log("Welcome", newUser)
    }
    console.log(user.username)
    return (
        <div>
            <form action="" onSubmit={createUser}>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" onChange={changeHandler} />
            <label htmlFor="email">Email</label>
            <input name="email" type="text" onChange={changeHandler}/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={changeHandler} />
            <button>submit</button>
            </form>
            <div>
                <h2>Your form data</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>password: {user.password}</p>
            </div>
        </div>
    )
}

export default Form