import { Fragment } from "react";
import { Redirect, Route, Switch } from 'react-router';
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Payments from "../Payments/Payments";
import Pricing from "../Pricing/Pricing";

const Switcher = () => (
    <Fragment>
        <Switch>
            <Route exact path='/' render={() => (<Redirect to='/home' />)} />
            <Route exact path='/home' render={() => (<Home />)} />
            <Route exact path='/pricing' render={() => (<Pricing />)} />
            <Route exact path='/payments' render={() => (<Payments />)} />
            <Route render={() => (<NotFound />)} />
        </Switch>
    </Fragment>
);

export default Switcher;