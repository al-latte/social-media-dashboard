import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import youtube from "./images/icon-youtube.svg";
import twitter from "./images/icon-twitter.svg";
import up from "./images/icon-up.svg";
import down from "./images/icon-down.svg";

const data = {
	bigCards: {
		cards: [
			{
				id: "fb",
				platform: facebook,
				userHandle: "@nathanf",
				numOfFollowers: "1987",
				label: "followers",
				gainOrLossIcon: up,
				gainOrLossNumber: "12 Today",
				borderTop: "5px solid hsl(208, 92%, 53%)",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				id: "tw",
				platform: twitter,
				userHandle: "@nathanf",
				numOfFollowers: "1044",
				label: "followers",
				gainOrLossIcon: up,
				gainOrLossNumber: "99 Today",
				borderTop: "5px solid hsl(203, 89%, 53%)",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				id: "ig",
				platform: instagram,
				userHandle: "@realnathanf",
				numOfFollowers: "11K",
				label: "followers",
				gainOrLossIcon: up,
				gainOrLossNumber: "1099 Today",
				borderTop: "5px solid hsl(37, 97%, 70%)",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				id: "yt",
				platform: youtube,
				userHandle: "@nathanf",
				numOfFollowers: "1987",
				label: "subscribers",
				gainOrLossIcon: down,
				gainOrLossNumber: "144 Today",
				borderTop: "5px solid hsl(348, 97%, 39%)",
				textColor: "hsl(356, 69%, 56%)",
			},
		],
	},
	smallCards: {
		cards: [
			{
				platform: facebook,
				number: "87",
				label: "Page Views",
				gainOrLossIcon: up,
				gainOrLossNumber: "3%",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				platform: facebook,
				number: "52",
				label: "Likes",
				gainOrLossIcon: down,
				gainOrLossNumber: "2%",
				textColor: "hsl(356, 69%, 56%)",
			},
			{
				platform: instagram,
				number: "5462",
				label: "Likes",
				gainOrLossIcon: up,
				gainOrLossNumber: "2257%",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				platform: instagram,
				number: "52k",
				label: "Profile Views",
				gainOrLossIcon: up,
				gainOrLossNumber: "1375%",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				platform: twitter,
				number: "117",
				label: "Retweets",
				gainOrLossIcon: up,
				gainOrLossNumber: "303%",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				platform: twitter,
				number: "507",
				label: "Likes",
				gainOrLossIcon: up,
				gainOrLossNumber: "553%",
				textColor: "hsl(163, 72%, 41%)",
			},
			{
				platform: youtube,
				number: "107",
				label: "Likes",
				gainOrLossIcon: down,
				gainOrLossNumber: "19%",
				textColor: "hsl(356, 69%, 56%)",
			},
			{
				platform: youtube,
				number: "1407",
				label: "Total Views",
				gainOrLossIcon: down,
				gainOrLossNumber: "12%",
				textColor: "hsl(356, 69%, 56%)",
			},
		],
	},
};

export default data;
