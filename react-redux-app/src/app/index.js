//redux code
import React from "react";
import {render} from "react-dom";
import App from "./containers/App";

import store from "./store";

//to connect store with react code
import {Provider} from "react-redux";

//to connect react app  to redux store
render(
	<Provider store={store}>
		<App />
	</Provider>, 
   window.document.getElementById("app"));
