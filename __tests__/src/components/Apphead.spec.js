import React from "react";
import Apphead from "../../../src/components/Apphead";
import { render } from "@testing-library/react-native";

describe("Apphead", () => {
	it("should render Appbar", () => {
		const { queryByTestId } = render(<Apphead />);
		expect(queryByTestId("apphead")).toBeTruthy();
	});
});
