import React from 'react'
import Home from './components/views/Home/Home';
import Flights from './components/views/Flights/Flights';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './index.css'

const App = () => (
    <BrowserRouter>
        <Link exact to='/'>Home</Link>
        <Link to='/Flights'>Flights</Link>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Flights' component={Flights} />
            {/* <Route component={NoMatch}/> */}
        </Switch>
    </BrowserRouter>
);

export default App