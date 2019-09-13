import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import { App } from "./App.js";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('content'));

serviceWorker.unregister();
