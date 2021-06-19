import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { eraseCookie } from '../../utils/cookies'

const Home = () => {
    const history = useHistory()

    const onClickHome = async () => {
        try {
            const res = await axios.get('http://localhost:5000/home', { withCredentials: true })
            console.log('home res: ', res)
        } catch (err) {
            console.log('home error: ', err)
        }
    }

    const onLogout = async () => {
        eraseCookie('accessToken')
        await axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
        history.push('/auth')
    }

    return (
        <div>
            <button onClick={onClickHome}>Home</button>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Home