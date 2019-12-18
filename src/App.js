import React from "react";
import {Header} from './blocks/Header';
import "react-simple-keyboard/build/css/index.css";
import "./index.css";
import { Route, Switch } from 'react-router-dom';
import {Train} from "./pages/Train";

export const App = () => (
    <>
        <Header/>
        <Switch>
            <Route exact path='/'/>
            <Route exact path='/auth'/>
            <Route exact path='/exp1'/>
            <Route exact path='/exp2'/>
            <Route exact path='/train' component={Train}/>
        </Switch>
    </>
);
