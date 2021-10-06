import Movies from "./components/movies.component";
import Navbar from "./common/navbar.component";
import { Route, Switch } from 'react-router-dom';
import Login from './components/login.component';
import MovieForm from "./components/movie-form.component";
import SignUp from "./components/signup.component";
import Logout from "./components/logout.component";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/movies' component={Movies} />
                <Route path='/login' component={Login} />
                <Route path='/add-movie' component={MovieForm} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/logout' component={Logout} />
                <Route exact path='/' component={Movies} />
            </Switch>
        </>
    );
}

export default App;
