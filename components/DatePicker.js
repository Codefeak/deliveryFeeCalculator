import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { View, Platform } from "react-native";
import { Button } from "react-native-paper";

export default function DatePicker(props) {
	const { value, style, btnStyle, setDate, mode } = props;
	const [renderValue, setRenderValue] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [show, setShow] = useState(false);

	function onChange(event, val) {
		mode === "date" ? setSelectedDate(val) : mode === "time" && setSelectedTime(val);
		setDate(val);
		setRenderValue(val);
        setShow(false);
	}


	function showDatePicker() {
		setShow(true);
	}

	const component = (
		<View style={style}>
			<Button onPress={showDatePicker} contentStyle={btnStyle} mode="text" >
				{mode === "date" ?
					moment(renderValue === null ? new Date() : new Date(renderValue)).format("LL") :
					mode === "time" && moment(renderValue === null ? new Date() : new Date(renderValue)).format("LT")
				}
			</Button>
			{show && (<DateTimePicker
				testID="dateTimePicker"
				value={new Date(value)}
				mode={mode}
				is24Hour={true}
				display="spinner"
				onChange={onChange}
			/>)}
		</View>
	);

	return { ...component };
}
