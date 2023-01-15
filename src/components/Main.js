import "../styles.css";

import data from "../data";
import BigCards from "./BigCards";
import SmallCards from "./SmallCards";

export default function Main(props) {
	const mode = props.mode;

	const bigCardData = data.bigCards.cards;
	const smallCardData = data.smallCards.cards;

	const bigCardElements = bigCardData.map((card, index) => {
		return (
			<BigCards
				key={index}
				id={card.id}
				platform={card.platform}
				userHandle={card.userHandle}
				numOfFollowers={card.numOfFollowers}
				label={card.label.toUpperCase()}
				gainOrLossIcon={card.gainOrLossIcon}
				gainOrLossNumber={card.gainOrLossNumber}
				borderTop={card.borderTop}
				textColor={card.textColor}
				mode={mode}
			/>
		);
	});

	const smallCardElements = smallCardData.map((card, index) => {
		return (
			<SmallCards
				key={index}
				platform={card.platform}
				label={card.label}
				gainOrLossIcon={card.gainOrLossIcon}
				gainOrLossNumber={card.gainOrLossNumber}
				number={card.number}
				textColor={card.textColor}
				mode={mode}
			/>
		);
	});

	return (
		<main className="main">
			<div className="dashboard">{bigCardElements}</div>
			<h2 className={mode ? "textLight" : "textDark"}>Overview - Today</h2>
			<div className="overview">{smallCardElements}</div>
		</main>
	);
}
