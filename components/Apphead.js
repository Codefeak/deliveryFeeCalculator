import React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function Apphead() {
	const component = (
		<Appbar.Header>
			<Appbar.Content title="Delivery Fee Calculator" subtitle={""} />
			<Appbar.Action icon={MORE_ICON} onPress={() => {}} />
		</Appbar.Header>

	);

	return {
		...component,
	};
}
