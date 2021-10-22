import React from "react";
import App, { onBtnPress } from "../App";
import { fireEvent, render } from "@testing-library/react-native";

describe("<App/>", () => {
	it("should render App component", () => {
		const { getByTestId } = render(<App />);
		expect(getByTestId("app")).toBeTruthy();
	});
});
