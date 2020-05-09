import * as React from "react";
import * as ReactDOM from "react-dom";
import './assets/styles/app.scss';
import '@babel/polyfill';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { MainPage } from "./components/MainPage";

ReactDOM.render(
    <MainPage name="Audax" />,
    document.querySelector('#app')
);