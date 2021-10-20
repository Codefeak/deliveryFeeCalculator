import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Title as RNPTitle } from "react-native-paper";
import moment from "moment";
import TextInputComponent from "./components/TextInputComponent";
import Apphead from "./components/Apphead";
import DatePicker from "./components/DatePicker";
import { Button } from "react-native-paper";
import { calculate } from "./utils/calculation";
import { formatDateTime } from "./utils/date";

export default function App() {
	const [cartValue, setCartValue] = useState("");
	const [deliveryDistance, setDeliveryDistance] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState('Select Date');
	const [time, setTime] = useState('Select Time');
	const [totalPrice, setTotalPrice] = useState(0);

	function onBtnPress() {
		const result = calculate({
			cartValue: Number(cartValue),
			time: formatDateTime(date, time),
			distance: Number(deliveryDistance),
			amount: Number(amount),
		});
		setTotalPrice(result);
	}

	function btnDisable() {
		if (
			cartValue === "" ||
			deliveryDistance === "" ||
			amount === "" ||
			date === "Select Date" ||
			time === "Select Time"
		) {
			return true;
		}
		return false;
	}
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Apphead />
			<SafeAreaView>
				<View style={styles.inputContainer}>
					<RNPTitle style={{ fontSize: 14 }}>Cart Value</RNPTitle>
					<TextInputComponent
						style={styles.textInput}
						keyboardType="numeric"
						text={cartValue}
						setText={setCartValue}
						rightAffix="€"
					/>
				</View>
				<View style={styles.inputContainer}>
					<RNPTitle style={{ fontSize: 14 }}>Delivery Distance</RNPTitle>
					<TextInputComponent
						style={styles.textInput}
						keyboardType="numeric"
						text={deliveryDistance}
						setText={setDeliveryDistance}
						rightAffix="m"
					/>
				</View>
				<View style={styles.inputContainer}>
					<RNPTitle style={{ fontSize: 14 }}>Amount of items</RNPTitle>
					<TextInputComponent
						style={styles.textInput}
						keyboardType="numeric"
						text={amount}
						setText={setAmount}
					/>
				</View>
				<View style={styles.inputContainer}>
					<RNPTitle style={{ fontSize: 14 }}>Date</RNPTitle>
					<DatePicker
						mode="date"
						style={styles.datePicker}
						btnStyle={styles.btn}
						value={date === 'Select Date' ? date : moment(date)}
						setDate={setDate}
					/>
				</View>
				<View style={styles.inputContainer}>
					<RNPTitle style={{ fontSize: 14 }}>Time</RNPTitle>
					<DatePicker
						mode="time"
						style={styles.datePicker}
						btnStyle={styles.btn}
						value={time === 'Select Time' ? time : moment(time)}
						setDate={setTime}
					/>
				</View>
				<View style={styles.calculateContainer}>
					<Button
						mode="contained"
						style={styles.calculateBtn}
						onPress={onBtnPress}
						disabled={btnDisable()}
					>
						Calculate Delivery Price
					</Button>
				</View>
				<View style={styles.totalContainer}>
					<RNPTitle style={{ fontSize: 14 }}>
						Delivery Price: {totalPrice} €
					</RNPTitle>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	inputContainer: {
		flexDirection: "row",
		padding: 10,
		justifyContent: "space-between",
	},
	textInput: {
		marginLeft: 10,
		width: 100,
		height: 30,
	},
	btn: {
		justifyContent: "flex-end",
	},
	datePicker: {
		flex: 1,
		borderRadius: 5,
	},
	calculateContainer: {
		alignItems: "center",
	},
	calculateBtn: {
		marginTop: 40,
		width: "70%",
	},
	totalContainer: {
		marginTop: 30,
		padding: 20,
	},
});
