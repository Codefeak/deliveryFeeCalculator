import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { View, Platform } from "react-native";
import { Button } from "react-native-paper";

export default function DatePicker(props) {
	const { value, style, btnStyle, setDate, mode } = props;
	const [renderValue, setRenderValue] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [show, setShow] = useState(false);
	const [showBtn, setShowBtn] = useState(false);

	function onChange(event, val) {
		mode === "date"
			? setSelectedDate(val)
			: mode === "time" && setSelectedTime(val);
		setDate(val);
		setRenderValue(val);
	}

	function onPressOK() {
		setDate(renderValue);
		setShow(false);
		setShowBtn(false);
	}

	function showDatePicker() {
		setShow(true);
		setShowBtn(true);
	}

	const component = (
		<View style={style}>
			<Button
				testID="showDateTimeBtn"
				onPress={showDatePicker}
				contentStyle={btnStyle}
				mode="text"
			>
				{mode === "date"
					? renderValue === null
						? "Select Date"
						: moment(new Date(renderValue)).format("LL")
					: mode === "time" && renderValue === null
					? "Select Time"
					: moment(new Date(renderValue)).format("LT")}
			</Button>

			{show && (
				<View testID="dateTimePicker">
					<DateTimePicker
						value={typeof value === "string" ? new Date() : new Date(value)}
						mode={mode}
						is24Hour={true}
						display="default"
						onChange={onChange}
					/>
				</View>
			)}
			{showBtn && (
				<Button testID="okBtn" onPress={onPressOK} mode="outlined">
					OK
				</Button>
			)}
		</View>
	);

	return { ...component };
}
