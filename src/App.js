import { useEffect, useState } from "react";

import Main from "./components/Main";
import Header from "./components/Header";

function App() {
	const [isLightMode, setMode] = useState(true);

	function handleThemeSwitch() {
		setMode((prevMode) => !prevMode);
	}

	useEffect(() => {
		if (isLightMode) {
			document.body.className = "lightMode";
		} else {
			document.body.className = "darkMode";
		}
	}, [isLightMode]);

	return (
		<div className="App">
			<Header mode={isLightMode} onclick={handleThemeSwitch} />
			<Main mode={isLightMode} />
		</div>
	);
}

export default App;
