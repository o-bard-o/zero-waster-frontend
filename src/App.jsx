import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Intro from "./routes/intro/intro";
import SplashBar1 from "./routes/splashScreen/splashBar1";
import SplashBar2 from "./routes/splashScreen/splashBar2";
import SplashBar3 from "./routes/splashScreen/splashBar3";
import Login from "./routes/login/login";
import Main from "./routes/main/main";
import Shop from "./routes/main/shop";
export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Intro} />
                    <Route path="/splash1" component={SplashBar1} />
                    <Route path="/splash2" component={SplashBar2} />
                    <Route path="/splash3" component={SplashBar3} />
                    <Route path="/login" component={Login} />
                    <Route path="/main/:id" component={Main} />
                    <Route path="/main/shop/:id" component={Shop}/>
                </Switch>
            </BrowserRouter>
        );
    }
}