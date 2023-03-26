export default function BigCards(props) {
	return (
		<div
			id={props.id}
			className={`bigcard bg-border ${
				props.mode ? "bigcard-light" : "bigcard-dark"
			}`}
		>
			<div className="bigcard-head">
				<img src={props.platform} alt="social media icon" />
				<span className={props.mode ? "lightModeText" : "darkModeText"}>
					{props.userHandle}
				</span>
			</div>
			<p
				className={`bigcard-boldtext ${props.mode ? "textLight" : "textDark"}`}
			>
				{props.numOfFollowers}
			</p>
			<p
				className={`bigcard-subtext ${
					props.mode ? "lightModeText" : "darkModeText"
				}`}
				style={{ letterSpacing: "2px" }}
			>
				{props.label}
			</p>
			<div className="bigcard-footer">
				<img src={props.gainOrLossIcon} alt="up or down icon" />
				<span style={{ color: props.textColor }}>{props.gainOrLossNumber}</span>
			</div>
		</div>
	);
}
