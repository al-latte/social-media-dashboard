export default function Header(props) {
	return (
		<header className={`header ${props.mode ? "headerLight" : "headerDark"}`}>
			<div className="titleSection">
				<h1 className={props.mode ? "textLight" : "textDark"}>
					Social Media Dashboard
				</h1>
				<p className={props.mode ? "lightModeText" : "darkModeText"}>
					Total followers: 23,004
				</p>
			</div>
			<div className="toggleSection">
				<p className={props.mode ? "lightModeText" : "darkModeText"}>
					Dark Mode
				</p>
				<div
					className={`toggleDiv ${
						props.mode ? "toggleDiv-light" : "toggleDiv-dark"
					}`}
					onClick={props.onclick}
				>
					<div
						className={`toggle ${props.mode ? "toggle-light" : "toggle-dark"}`}
					></div>
				</div>
			</div>
		</header>
	);
}
