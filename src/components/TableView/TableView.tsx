import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import TableViewHeader from './TableViewHeader';
import TableViewFooter from './TableViewFooter';
import type { Theme } from '../../types/Theme';
import { withTheme } from '../../core/theming';

type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme;
  /**
   * Header of TableView
   */
  header?: string;
  /**
   * Indicates whether render empty header or not
   */
  withoutHeader?: boolean;
  /**
   * Optional styles of header
   */
  headerStyle?: StyleProp<ViewStyle>;
  /**
   * Footer of TableView
   */
  footer?: string;
  /**
   * Whether render empty footer or not
   */
  withoutFooter?: boolean;
  /**
   * Footer style
   */
  footerStyle?: StyleProp<ViewStyle>;
  /**
   * onPress handler of Footer component
   */
  onFooterPress?: () => void;
  /**
   * onPress handler of Footer component
   */
  onHeaderPress?: () => void;
  /**
   * Removes the top and bottom separators from the first and last items respectively
   */
  withoutTopBottomSeparators?: boolean;
  /**
   * Children of TableView to render, e.g. RowItem's
   */
  children?: React.ReactNode;
};

class TableView extends React.Component<Props> {
  static defaultProps = {
    header: '',
    footer: '',
  };

  render() {
    const {
      header,
      children,
      footer,
      withoutHeader,
      withoutFooter,
      headerStyle,
      footerStyle,
      onHeaderPress,
      onFooterPress,
      withoutTopBottomSeparators,
    } = this.props;
    return (
      <View>
        {!withoutHeader && !!header && (
          <TableViewHeader
            header={header}
            style={headerStyle}
            onPress={onHeaderPress}
          />
        )}
        {React.Children.map(children, (child, idx) => {
          if (React.isValidElement(child)) {
            if (withoutTopBottomSeparators) {
              return React.cloneElement(child);
            }
            return React.cloneElement(child, {
              first: idx === 0,
              last: idx === React.Children.count(children) - 1,
            });
          }
          return null;
        })}
        {!withoutFooter && !!footer && (
          <TableViewFooter
            footer={footer}
            onPress={onFooterPress}
            style={footerStyle}
          />
        )}
      </View>
    );
  }
}

export default withTheme(TableView);
