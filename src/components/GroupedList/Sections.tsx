import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  findNodeHandle,
  NativeModules,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { withTheme } from '../../core/theming';

import type { Theme } from '../../types/Theme';

const SECTION_HEIGHT = 18;

type Props = {
  theme: Theme;
  onSectionPress: (id: number) => void;
  items: Array<string>;
  sectionPrimaryColor?: string | null;
  style?: StyleProp<ViewStyle>;
};

type State = {
  sections: Array<string | null>;
};

class Sections extends PureComponent<Props, State> {
  state = {
    sections: [],
  };

  UNSAFE_componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: this.handleMove,
      onPanResponderGrant: this.handleMove,
    });
  }

  sectionsHeight: number | null = null;
  sectionsY: number | null = null;
  panResponder: any;
  sections = React.createRef<View>();
  currentSectionIdx: number | null = null;

  handleContainerLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }: any) => {
    this.setState({ sections: this.prepareSections(height) });
  };

  handleLayout = () => {
    NativeModules.UIManager.measure(
      findNodeHandle(this.sections.current),
      // @ts-ignore
      (x, y, width, height, pageX, pageY) => {
        this.sectionsHeight = height;
        this.sectionsY = pageY;
      }
    );
  };

  handleMove = ({ nativeEvent: { pageY } }: any) => {
    if (!this.sectionsHeight || !this.sectionsY) {
      return;
    }

    const sectionIdx = Math.round(
      ((pageY - this.sectionsY) * this.props.items.length) / this.sectionsHeight
    );
    if (
      sectionIdx >= 0 &&
      sectionIdx < this.props.items.length &&
      this.currentSectionIdx !== sectionIdx
    ) {
      this.currentSectionIdx = sectionIdx;
      this.props.onSectionPress(sectionIdx);
    }
  };

  prepareSections(parentHeight: number): Array<string | null> {
    const { items } = this.props;

    let slots = (parentHeight - 50) / SECTION_HEIGHT;
    if (slots >= items.length) {
      return [...items];
    }

    if (!(slots % 2)) {
      slots += 1;
    }

    const dotsCount = Math.floor(slots / 2);
    const visibleSectionsCount = slots - dotsCount;
    const sectionsCountPerDot =
      (items.length - visibleSectionsCount) / dotsCount;

    let sum = 0;
    const visibleSections = [items[0], null]; // make first item visible
    for (let i = 0; i < dotsCount - 1; i++) {
      sum += 1 + sectionsCountPerDot;
      const visibleSectionIdx = Math.round(sum);
      visibleSections.push(items[visibleSectionIdx], null);
    }
    visibleSections.push(items[items.length - 1]); // make last item visible
    // Each null in visbleSections array is a dot
    return visibleSections;
  }

  renderSection = (item: any, index: number) => {
    const { sectionPrimaryColor, theme } = this.props;
    if (item) {
      return (
        <Text
          key={index}
          style={[
            { color: sectionPrimaryColor || theme.primaryColor },
            styles.section,
          ]}
        >
          {item}
        </Text>
      );
    }
    return (
      <View key={index} style={styles.dotContainer}>
        <View
          style={[
            { backgroundColor: sectionPrimaryColor || theme.primaryColor },
            styles.dot,
          ]}
        />
      </View>
    );
  };

  render() {
    const { style, theme } = this.props;
    const { sections } = this.state;

    return (
      <View
        style={[
          { backgroundColor: theme.barColor },
          styles.container,
          style && style,
        ]}
        onLayout={this.handleContainerLayout}
      >
        <View
          style={styles.sections}
          {...this.panResponder.panHandlers}
          onLayout={this.handleLayout}
          ref={this.sections}
        >
          {sections.map(this.renderSection)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 20,
    maxWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sections: {
    width: 45,
  },
  section: {
    fontSize: 14,
    height: SECTION_HEIGHT,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  dotContainer: {
    height: SECTION_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default withTheme(Sections);
