import moment from "moment";
import React from "react";
import DatePicker from "../../../src/components/DatePicker";
import { fireEvent, render } from "@testing-library/react-native";

describe("Show Date Picker", () => {
	it("should show date picker when Date/Time is pressed", () => {
		const { getByTestId, queryByTestId } = render(
			<DatePicker mode="date" value={new Date()} />
		);
		const btn = getByTestId("showDateTimeBtn");
		fireEvent.press(btn);
		expect(queryByTestId("dateTimePicker")).toBeTruthy();
	});

	it("should show OK button when button is Date/Time picker is open", () => {
		const { getByTestId, queryByTestId } = render(
			<DatePicker mode="date" value={new Date()} />
		);
		const btn = getByTestId("showDateTimeBtn");
		fireEvent.press(btn);
		expect(queryByTestId("dateTimePicker")).toBeTruthy();
		expect(queryByTestId("okBtn")).toBeTruthy();
	});

	it("when OK button is pressed both dateTimePicker and Ok button should be not be hidden", () => {
		const { getByTestId, queryByTestId } = render(
			<DatePicker mode="date" value={new Date()} setDate={jest.fn()} />
		);
		const btn = getByTestId("showDateTimeBtn");
		fireEvent.press(btn);
		const okBtn = getByTestId("okBtn");
		fireEvent.press(okBtn);
		expect(queryByTestId("dateTimePicker")).not.toBeTruthy();
		expect(queryByTestId("okBtn")).not.toBeTruthy();
	});

	it("should trigger onChange function", () => {
		const newDate = new Date();
		const { getByTestId, queryByText } = render(
			<DatePicker
				mode="date"
				value={new Date()}
				setDate={jest.fn()}
				setRenderValue={jest.fn()}
			/>
		);
		const btn = getByTestId("showDateTimeBtn");
		fireEvent.press(btn);
		const dateTimePicker = getByTestId("dateTimePicker");
		const btnByText = queryByText(moment(newDate).format("LL"));
		expect(btnByText).toBeTruthy();
	});
});
