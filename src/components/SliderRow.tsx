import * as React from 'react';

import RowItem from './RowItem';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';
import type { Props as RowProps } from './RowItem';
import type { ImageURISource } from 'react-native';
import Slider from '@react-native-community/slider';

type Props = RowProps & {
  theme: Theme;
  title?: string;
  subtitle?: string;
  style?: any;
  icon?: ImageURISource;
  onPress?: Function;

  sliderWidth: number;
  disabled?: boolean;
  inverted?: boolean;
  tapToSeek?: boolean;

  value: number;
  step: number;
  minimumValue: number;
  maximumValue: number;
  onValueChange: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
};

class SliderRow extends React.Component<Props> {
  renderRight = () => (
    <Slider
      disabled={this.props.disabled}
      inverted={this.props.inverted}
      tapToSeek={this.props.tapToSeek}
      value={this.props.value}
      step={this.props.step}
      minimumValue={this.props.minimumValue}
      maximumValue={this.props.maximumValue}
      onValueChange={this.props.onValueChange}
      onSlidingComplete={this.props.onSlidingComplete}
      style={{ width: this.props.sliderWidth }}
      minimumTrackTintColor={this.props.minimumTrackTintColor}
      maximumTrackTintColor={this.props.maximumTrackTintColor}
    />
  );

  render() {
    return <RowItem renderRight={this.renderRight} {...this.props} />;
  }
}

export default withTheme(SliderRow);
