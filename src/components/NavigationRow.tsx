import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import RowItem from './RowItem';
import Icon from './Icon';
import { withTheme } from '../core/theming';
import { Body } from './Typography';
import type { Theme } from '../types/Theme';
import type { Props as RowProps } from './RowItem';

type Props = RowProps & {
  theme: Theme;
  onPress: () => void;
  info?: string;
  chevronColour?: string;
  iconColour?: string;
};

class NavigationRow extends React.Component<Props> {
  renderRightComponent = () => {
    const {
      info,
      theme: { placeholderColor },
      chevronColour,
    } = this.props;
    return (
      <View style={styles.row}>
        {info ? (
          <Body style={{ color: placeholderColor, paddingRight: 10 }}>
            {info}
          </Body>
        ) : null}
        <Icon
          name="chevron-forward-outline"
          size={22}
          color={chevronColour ? chevronColour : placeholderColor}
        />
      </View>
    );
  };
  render() {
    return <RowItem renderRight={this.renderRightComponent} {...this.props} />;
  }
}

export default withTheme(NavigationRow);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
