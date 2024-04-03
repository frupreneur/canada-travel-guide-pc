import { queryArr } from "../../db/visa";

export function getRandomNumber() {
	return Math.floor(Math.random() * 900000) + 100000;
}

export function formatDollar(number) {
	return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export function getRandomQuery() {
	return queryArr[Math.floor(Math.random() * queryArr.length)];
}
