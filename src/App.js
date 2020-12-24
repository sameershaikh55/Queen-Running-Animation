import React from "react";
import "./App.css";
import Scenery from "./Components/Scenery/Scenery";
import Sky from "./Components/Sky/Sky";
import Earth from "./Components/Earth/Earth";

function App() {
	return (
		<div className="container">
			<Sky />
			<Earth />
			<Scenery />
		</div>
	);
}

export default App;
