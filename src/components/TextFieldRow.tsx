import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import RowItem from './RowItem';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme;
  title: string;
  value: string;
  placeholder?: string;
  editable?: boolean;
  onValueChange: (text: string) => void;
};

class TextFieldRow extends React.Component<Props> {
  static defaultProps = {
    placeholder: '',
  };
  input = React.createRef<TextInput>();

  focusInput = () => {
    if (this.input.current) this.input.current.focus();
  };

  renderRightComponent = () => {
    const {
      value,
      placeholder,
      onValueChange,
      theme: { placeholderColor, primaryColor, textColor, disabledTextColor },
      editable,
    } = this.props;
    return (
      <TextInput
        ref={this.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={onValueChange}
        style={[
          styles.input,
          {
            color:
              editable === undefined
                ? textColor
                : editable
                ? textColor
                : disabledTextColor,
          },
        ]}
        selectionColor={primaryColor}
        editable={editable}
      />
    );
  };
  render() {
    return (
      <RowItem
        renderRight={this.renderRightComponent}
        onPress={this.focusInput}
        {...this.props}
      />
    );
  }
}

export default withTheme(TextFieldRow);

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
    fontSize: 18,
    width: '100%',
  },
});
