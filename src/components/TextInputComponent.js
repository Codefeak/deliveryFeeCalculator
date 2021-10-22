import * as React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";

export default function TextInputComponent(props) {
	const { label, style, text, setText, keyboardType, rightAffix, testID } = props;

	const component = (
		<TextInput
			testID={testID}
			value={text}
			style={style}
			keyboardType={keyboardType}
			onChangeText={(text) => setText(text)}
			right={<TextInput.Affix text={rightAffix} />}
		/>
	);

	return {
		...component,
	};
}
