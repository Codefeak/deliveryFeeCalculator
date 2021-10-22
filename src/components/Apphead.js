import React from "react";
import { Appbar } from "react-native-paper";
import { Platform, View } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function Apphead() {
	const component = (
		<View testID="apphead">
			<Appbar.Header>
				<Appbar.Content title="Delivery Fee Calculator" subtitle={""} />
			</Appbar.Header>
		</View>
	);

	return {
		...component,
	};
}
