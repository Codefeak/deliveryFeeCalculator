import {
	calculate,
	checkDistance,
	exceedItemSurcharge,
	withValueSurcharge,
	checkRushHour,
} from "../../../src/utils/calculation";
import { formatDateTime } from "../../../src/utils/date";
import moment from "moment";

describe("Delivery Fee Calculation", () => {
	it("When the cartValue is equal to or more than 100 the price return should be 0€", () => {
		const cartValue = 100;
		const distance = 1000;
		const amount = 3;
		const result = calculate({ cartValue, distance, amount });
		expect(result).toBe(0);
	});

	it("If the cart value is less than 10€, a surcharge is added to the delivery price which is the difference between the cart value and 10€.", () => {
		const cartValue = 5.4;
		const result = withValueSurcharge(cartValue);
		expect(result).toBe(4.6);
	});

	it("If the cart value is more than 10€, a surcharge is not added.", () => {
		const cartValue = 15.4;
		const result = withValueSurcharge(cartValue);
		expect(result).toBe(0);
	});

	it("Delivery fee for the first 1000m is 2€", () => {
		const distance = 1000;
		const cartValue = 10;
		const amount = 3;
		const result = calculate({ cartValue, distance, amount });
		expect(result).toBe(2);
	});

	it("for distance is longer than 1000m, 1€ is added for every additional 500 meters before reaching the destination.", () => {
		const distance = 2001;
		const extraDistance = distance - 1000;
		const defaultFee = 2;
		const result = checkDistance(extraDistance, defaultFee);
		expect(result).toBe(5);
	});

	it("If the amount of items is five or more, an additional 50 cent surcharge is added for each items above five.", () => {
		const amount = 5;
		const result = exceedItemSurcharge(amount);
		expect(result).toBe(0.5);
	});

	it("Delivery fee can never be more than 15€, including added surcharges.", () => {
		const distance = 100000;
		const cartValue = 50;
		const amount = 30;
		const result = calculate({ cartValue, distance, amount });
		expect(result).toBe(15);
	});

	it("Should check Friday rush hour i.e. 3 - 7PM UTC", () => {
		const time = moment("2021-10-22 19:30").format(); // 22nd Oct 2021 Friday 4:30pm UTC
		const result = checkRushHour(time);
		expect(result).toBe(true);
	});

	it("the delivery fee will be multiplied by 1.1x during Friday rush hours", () => {
		const distance = 1000;
		const cartValue = 50;
		const amount = 3;
		const time = moment("2021-10-22 19:30").format(); // 22nd Oct 2021 Friday 4:30pm UTC
		const result = calculate({ cartValue, distance, amount, time });
		expect(result).toBe(2.2);
	});
});

describe("Date", () => {
	it("should take date and time as argument and return a after combining them", () => {
		const date = new Date("2021-10-25 00:00");
		const time = new Date("2021-10-22 19:30");
		const expectedResult = moment(new Date("2021-10-25 19:30"))
			.format("LLL");
		const result = formatDateTime(date, time).format("LLL");
		expect(result).toBe(expectedResult);
	});
});
