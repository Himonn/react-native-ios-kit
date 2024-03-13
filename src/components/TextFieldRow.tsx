import * as React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';

import RowItem from './RowItem';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';
import Icon from './Icon';

type Props = {
  theme: Theme;
  title: string;
  value: string;
  placeholder?: string;
  editable?: boolean;
  clearButton?: boolean;
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

  renderTextInput = () => {
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

  renderRightComponent = () => {
    const { clearButton, onValueChange, value } = this.props;

    if (!clearButton || value.length === 0) {
      return this.renderTextInput();
    }

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>{this.renderTextInput()}</View>
        <TouchableOpacity
          onPress={() => {
            onValueChange('');
          }}
        >
          <Icon
            name={'close-circle-outline'}
            size={28}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 10,
  },
});
