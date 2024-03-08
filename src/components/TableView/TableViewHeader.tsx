import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { withTheme } from '../../core/theming';
import { Footnote } from '../Typography';
import type { Theme } from '../../types/Theme';
import type { ViewStyle, StyleProp } from 'react-native';

type Props = {
  header: string;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

class TableViewHeader extends React.Component<Props> {
  renderInnerPart() {
    const { header, theme, style } = this.props;

    return (
      <View
        style={[
          styles.header,
          { backgroundColor: theme.footnoteBackgroundColor },
          style,
        ]}
      >
        <Footnote style={{ color: theme.footnoteColor }}>
          {header.toUpperCase()}
        </Footnote>
      </View>
    );
  }

  render() {
    const { onPress } = this.props;

    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress}>
          {this.renderInnerPart()}
        </TouchableOpacity>
      );
    } else {
      return this.renderInnerPart();
    }
  }
}

export default withTheme(TableViewHeader);

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 7,
  },
});
