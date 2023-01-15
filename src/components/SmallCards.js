export default function SmallCards(props) {
	return (
		<div
			className={`smallCard ${
				props.mode ? "smallCard-light" : "smallCard-dark"
			}`}
		>
			<div className="smallCard-head">
				<p className={props.mode ? "lightModeText" : "darkModeText"}>
					{props.label}
				</p>
				<img src={props.platform} alt="social media icon" />
			</div>
			<div className="smallCard-mumber">
				<p className={props.mode ? "textLight" : "textDark"}>{props.number}</p>
				<div className="percent">
					<img src={props.gainOrLossIcon} alt="up or down icon" />
					<span style={{ color: props.textColor }}>
						{props.gainOrLossNumber}
					</span>
				</div>
			</div>
		</div>
	);
}
