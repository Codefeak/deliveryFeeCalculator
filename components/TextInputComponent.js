import * as React from 'react';
import { TextInput } from 'react-native-paper';

export default function TextInputComponent(props) {
    const {label, style, text, setText, keyboardType, rightAffix} = props;

  const component = (
    <TextInput
      value={text}
      style={style}
      keyboardType={keyboardType}
      onChangeText={text => setText(text)}
      right={<TextInput.Affix text={rightAffix} />}
    />
  );

  return {
      ...component
  };
};
