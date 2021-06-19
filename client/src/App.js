import { withRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { useEffect } from 'react';
import { readCookie } from './utils/cookies'
import './App.css'

function App(props) {

  useEffect(() => {
    const accessToken = readCookie('accessToken')
    if(!accessToken) {
      redirectToHomePage()
    }
  },[])

  const redirectToHomePage = () => {
    props.history.push('/auth')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  )
}

export default withRouter(App)
