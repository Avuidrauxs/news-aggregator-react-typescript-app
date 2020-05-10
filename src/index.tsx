import * as React from "react";
import * as ReactDOM from "react-dom";
import '@babel/polyfill';
import './assets/styles/app.scss';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { MainPage } from "./components/MainPage";

ReactDOM.render(
    <MainPage name="Audax" />,
    document.querySelector('#app')
);