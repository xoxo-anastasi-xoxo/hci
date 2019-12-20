import React from "react";
import {Header} from './blocks/Header';
import "react-simple-keyboard/build/css/index.css";
import "./index.css";
import { Route, Switch } from 'react-router-dom';
import {Train} from "./pages/Train";
import {Exp1} from "./pages/Exp1";
import {Exp2} from "./pages/Exp2";
import {Auth} from "./pages/Auth";

export const App = () => (
    <>
        <Header/>
        <Switch>
            <Route exact path='/' component={Auth}/>
            <Route exact path='/exp1' component={Exp1}/>
            <Route exact path='/exp2' component={Exp2}/>
            <Route exact path='/train' component={Train}/>
        </Switch>
    </>
);
