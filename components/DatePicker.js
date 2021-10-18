import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { View, Platform } from "react-native";
import { Button } from "react-native-paper";

export default function DatePicker(props) {
	const { value, style, btnStyle, setDate } = props;
	const [renderValue, setRenderValue] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	const [show, setShow] = useState(false);

	function onChange(event, val) {
		setSelectedDate(val);
		setDate(moment(val));
		setRenderValue(val);
        setShow(false);
	}


	function showDatePicker() {
		setShow(true);
	}

	const component = (
		<View style={style}>
			<Button onPress={showDatePicker} contentStyle={btnStyle} mode="text" >
				{moment(
					renderValue === null ? new Date() : new Date(renderValue)
				).format("LL")}
			</Button>
			{show && (<DateTimePicker
				testID="dateTimePicker"
				value={new Date(value)}
				mode="date"
				is24Hour={true}
				display="spinner"
				onChange={onChange}
			/>)}
		</View>
	);

	return { ...component };
}
