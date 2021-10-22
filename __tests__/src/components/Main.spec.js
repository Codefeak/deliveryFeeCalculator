import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Main from "../../../src/components/Main";
import {calculate} from '../../../src/utils/calculation';

describe("Main", () => {
	it("calculate btn is disabled in the begining", () => {
		const { queryByTestId } = render(<Main />);
		expect(queryByTestId("calculateBtn").props.accessibilityState.disabled).toBe(true);
	});

});