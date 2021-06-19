import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Auth = () => {
    const [user, setUser] = useState({ userName: '', email: '', password: '' })
    const history = useHistory()

    const onHandleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const onClickHome = () => {
        axios.get('http://localhost:5000/home', { withCredentials: true })
    }

    const onLogin = async () => {
        await axios.post('http://localhost:5000/auth/login', { ...user }, { withCredentials: true })
        history.push('/home')
    }

    const onRegister = async () => {
        try {
            const res = await axios.post('http://localhost:5000/auth/register', { ...user }, { withCredentials: true })
            console.log('reg res: ', res)
        } catch (err) {
            console.log('reg err: ', err)
        }
    }

    return (
        <form>
            <input type="text" name="userName" value={user.userName} placeholder="User Name" onChange={onHandleChange} />
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={onHandleChange} />
            <input type="text" name="password" value={user.password} placeholder="Password" onChange={onHandleChange} />
            <br />
            <button type="button" onClick={onClickHome}>Home</button>
            <button type="button" onClick={onLogin}>Login</button>
            <button type="button" onClick={onRegister}>Register</button>
        </form>
    )
}

export default Auth