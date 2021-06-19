import { Switch, Redirect, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Auth from '../components/Auth/Auth'

const Routes = () => {
    return (
        <Switch>
            <Redirect from="/" exact to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/auth" component={Auth} />
        </Switch>
    )
}

export default Routes