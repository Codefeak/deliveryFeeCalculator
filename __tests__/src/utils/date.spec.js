import { formatDateTime } from "../../../src/utils/date";
import moment from "moment";

describe("Format date and Time", () => {
	it("should take date and time as argument and return a after combining them", () => {
		const date = new Date("2021-10-25 00:00");
		const time = new Date("2021-10-22 19:30");
		const expectedResult = moment(new Date("2021-10-25 19:30"))
			.format("LLL");
		const result = formatDateTime(date, time).format("LLL");
		expect(result).toBe(expectedResult);
	});
});
