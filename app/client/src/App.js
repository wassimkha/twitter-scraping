import './App.css';
import React, {Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Portal from "./component/portal";





const App = () => {
    return (
            <Router>
                <Fragment>
                    <Route exact path='/' component={Portal}/>
                    {/*<section>*/}
                    {/*    <Switch>*/}
                    {/*        <Route exact path='/login' component={Login}/>*/}
                    {/*        <Route exact path='/register' component={Register}/>*/}
                    {/*    </Switch>*/}
                    {/*</section>*/}
                </Fragment>
            </Router>
    );
}

export default App;
