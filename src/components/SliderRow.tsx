import * as React from 'react';

import RowItem from './RowItem';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';
import type { Props as RowProps } from './RowItem';
import Slider from './Slider';
import type { ImageURISource } from 'react-native';

type Props = RowProps & {
  theme: Theme;
  title?: string;
  subtitle?: string;
  style?: any;
  icon?: ImageURISource;
  onPress?: Function;
  first: boolean;
  last: boolean;

  value: number;
  stepValue: number;
  minValue: number;
  maxValue: number;
  minIconName?: string;
  maxIconName?: string;
  minIconColor?: string;
  maxIconColor?: string;
  minIconSize?: number;
  maxIconSize?: number;
  onValueChange: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  minTrackTintColor?: string;
  maxTrackTintColor?: string;
};

class SliderRow extends React.Component<Props> {
  renderRight = () => (
    <Slider
      value={this.props.value}
      stepValue={this.props.stepValue}
      minValue={this.props.minValue}
      maxValue={this.props.maxValue}
      minIconName={this.props.minIconName}
      maxIconName={this.props.maxIconName}
      minIconColor={this.props.minIconColor}
      maxIconColor={this.props.maxIconColor}
      minIconSize={this.props.minIconSize}
      maxIconSize={this.props.maxIconSize}
      onValueChange={this.props.onValueChange}
      onSlidingComplete={this.props.onSlidingComplete}
      minTrackTintColor={this.props.minTrackTintColor}
      maxTrackTintColor={this.props.maxTrackTintColor}
    />
  );

  render() {
    return <RowItem renderRight={this.renderRight} {...this.props} />;
  }
}

export default withTheme(SliderRow);
