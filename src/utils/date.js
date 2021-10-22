import moment from "moment";

export function formatDateTime(date, time) {
	if (date !== undefined && time !== undefined) {
		const newDate = `${date.getFullYear()}-${
			date.getMonth() + 1
		}-${date.getDate()} ${time.getHours()}:${time.getMinutes()}`;

		return moment(newDate);
	}
}
