import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Apphead from "./src/components/Apphead";
import Main from "./src/components/Main";

export default function App() {
	return (
		<View testID="app" style={styles.container}>
			<StatusBar style="auto" />
			<Apphead />
			<Main />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
