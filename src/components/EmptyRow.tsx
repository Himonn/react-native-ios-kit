import * as React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

export type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme;
  /**
   * Right Component
   */
  rightComponent?: React.ComponentType<React.ReactNode>;
  /**
   * Function which should return Element to be rendered on the right side of row
   */
  renderRight?: () => React.ReactNode;
  /**
   * Left Component
   */
  leftComponent?: React.ComponentType<React.ReactNode>;
  /**
   * Function which should return Element to be rendered on the left side of row
   */
  renderLeft?: () => React.ReactNode;
  /**
   * Middle Component
   */
  middleComponent?: React.ComponentType<React.ReactNode>;
  /**
   * Function which should return Element to be rendered in the middle of the row
   */
  renderMiddle?: () => React.ReactNode;
  /**
   * RowItem's onPress handler
   */
  onPress?: () => void;
  /**
   * RowItem's onLongPress handler
   */
  onLongPress?: () => void;
  /**
   * Internal props
   */
  first?: boolean;
  last?: boolean;
};

class EmptyRow extends React.Component<Props> {
  renderLeft = () => {
    const { renderLeft, leftComponent } = this.props;

    if (renderLeft) {
      return <View style={styles.leftComponent}>{renderLeft()}</View>;
    }

    if (leftComponent && React.isValidElement(leftComponent)) {
      return (
        <View style={styles.leftComponent}>
          {React.cloneElement(leftComponent)}
        </View>
      );
    }

    return null;
  };

  renderMiddle = () => {
    const { renderMiddle, middleComponent } = this.props;

    if (renderMiddle) {
      return <View style={styles.leftComponent}>{renderMiddle()}</View>;
    }

    if (middleComponent && React.isValidElement(middleComponent)) {
      return (
        <View style={styles.middleComponent}>
          {React.cloneElement(middleComponent)}
        </View>
      );
    }

    return null;
  };

  renderRight = () => {
    const { renderRight, rightComponent } = this.props;

    if (renderRight) {
      return <View style={styles.rightComponent}>{renderRight()}</View>;
    }

    if (rightComponent && React.isValidElement(rightComponent)) {
      return (
        <View style={styles.rightComponent}>
          {React.cloneElement(rightComponent)}
        </View>
      );
    }

    return null;
  };

  renderRow = () => {
    const { theme, first, last } = this.props;

    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor: theme.barColor,
            borderTopWidth: first ? StyleSheet.hairlineWidth : 0,
            borderBottomWidth: last ? StyleSheet.hairlineWidth : 0,
            borderColor: theme.dividerColor,
          },
        ]}
      >
        {this.renderLeft()}
        {this.renderMiddle()}
        {this.renderRight()}
      </View>
    );
  };

  renderTouchableRow = () => (
    <TouchableHighlight
      onPress={this.props.onPress}
      onLongPress={this.props.onLongPress}
      underlayColor={this.props.theme.footnoteColor}
      style={{ backgroundColor: this.props.theme.barColor }}
    >
      {this.renderRow()}
    </TouchableHighlight>
  );

  render() {
    const { last, onPress, theme } = this.props;
    return (
      <View style={{ backgroundColor: theme.barColor }}>
        {onPress ? this.renderTouchableRow() : this.renderRow()}
        {!last && (
          <View
            style={[
              styles.separator,
              {
                backgroundColor: theme.dividerColor,
                marginLeft: 15,
              },
            ]}
          />
        )}
      </View>
    );
  }
}

export default withTheme(EmptyRow);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 4,
    minHeight: 43,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
  leftComponent: {
    flexGrow: 1,
    alignItems: 'flex-start',
  },
  middleComponent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  rightComponent: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});
