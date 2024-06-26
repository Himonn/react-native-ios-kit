import * as React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import type { ImageURISource } from 'react-native';

import Icon from './Icon';
import { Body, Caption1 } from './Typography';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

export type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme;
  /**
   * Icon name
   */
  icon?: ImageURISource;
  /**
   * Title string to be displayed
   */
  title: string;
  /**
   * Optional subtitle string
   */
  subtitle?: string;
  /**
   * Right Component
   */
  rightComponent?: React.ComponentType<React.ReactNode>;
  /**
   * Function which should return Element to be rendered on the right side of row
   */
  renderRight?: () => React.ReactNode;
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
  /**
   * Forces the separator to be full width at bottom
   */
  forceFullWidthBottomSeparator?: boolean;
  /**
   * Forces the separator to be full width at bottom
   */
  forceFullWidthTopSeparator?: boolean;
  /**
   * Forces the separator to be full width at bottom
   */
  removeBottomSeparator?: boolean;
  /**
   * Forces the colour of the icon
   */
  iconColour?: string;
};

class RowItem extends React.Component<Props> {
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
    const {
      icon,
      title,
      subtitle,
      theme,
      first,
      last,
      forceFullWidthTopSeparator,
      iconColour,
    } = this.props;

    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor: theme.barColor,
            borderTopWidth:
              first || forceFullWidthTopSeparator
                ? StyleSheet.hairlineWidth
                : 0,
            borderBottomWidth: last ? StyleSheet.hairlineWidth : 0,
            borderColor: theme.dividerColor,
          },
        ]}
      >
        {icon && (
          <Icon
            name={icon}
            size={30}
            color={iconColour ? iconColour : theme.primaryColor}
          />
        )}
        <View
          style={[
            styles.titleWrapper,
            {
              marginLeft: icon ? 15 : 0,
              marginRight: title || subtitle ? 15 : 0,
            },
          ]}
        >
          {!!title && <Body>{title}</Body>}
          {subtitle && <Caption1>{subtitle}</Caption1>}
        </View>
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
    const {
      last,
      onPress,
      theme,
      icon,
      forceFullWidthBottomSeparator,
      removeBottomSeparator,
    } = this.props;
    return (
      <View style={{ backgroundColor: theme.barColor }}>
        {onPress ? this.renderTouchableRow() : this.renderRow()}
        {removeBottomSeparator && <View style={[styles.separator]} />}
        {!last && !removeBottomSeparator && (
          <View
            style={[
              styles.separator,
              {
                backgroundColor: theme.dividerColor,
                marginLeft: forceFullWidthBottomSeparator ? 0 : icon ? 54 : 15,
              },
            ]}
          />
        )}
      </View>
    );
  }
}

export default withTheme(RowItem);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 4,
    minHeight: 43,
  },
  titleWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
  rightComponent: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});
