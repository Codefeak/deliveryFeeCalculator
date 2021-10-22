import React from "react";
import TextInputComponent from "../../../src/components/TextInputComponent";
import App from "../../../App";
import { fireEvent, render } from "@testing-library/react-native";

describe("Text Inpur Component", () => {
	it("should render text input component", () => {
		const { queryByTestId } = render(<TextInputComponent testID="textInput" />);
		expect(queryByTestId("textInput")).toBeTruthy();
	});

	it("should fire onChange event", () => {
		const setText = jest.fn();
		const { getByTestId } = render(
			<TextInputComponent testID="inputCartValue" setText={setText} />
		);
		const input = getByTestId("inputCartValue");
		fireEvent.changeText(input, 'Text');
		expect(setText).toHaveBeenCalled();
	});
});
