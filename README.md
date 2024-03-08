<p align="center">
  <img alt="react-native-ios-kit" src="./assets/ios-kit-logo-name.png" width="496">
</p>
</br>
<p align="center">
  The missing React Native UI Kit for iOS.
</p>

---


## Features

This is a fork of react-native-ios-kit by callstack, thank you to them for creating this package.

You can find original documentation with all list of features and components [here](https://callstack.github.io/react-native-ios-kit)

## Changes

- Merged [#211](https://github.com/callstack/react-native-ios-kit/pull/211) (from original repo) to Migrate to TypeScript
- Merged [#2](https://github.com/Himonn/react-native-ios-kit/pull/2) to add `onLongPress` to `RowItem`
- Merged [#3](https://github.com/Himonn/react-native-ios-kit/pull/3) to remove `Slider` in favour of `@react-native-community/slider` and add `SliderRow`
- Merged [#5](https://github.com/Himonn/react-native-ios-kit/pull/5) to add `EmptyRow`
- Merged [#7](https://github.com/Himonn/react-native-ios-kit/pull/7) to add `onHeaderPress` to `TableView`

## Fork Usage

- Update your `package.json` to point to this repository for `react-native-ios-kit`


```json
  "dependencies": {
    ...
    "react-native-ios-kit": "https://github.com/Himonn/react-native-ios-kit/tarball/<INSERT MOST RECENT COMMIT>",
  }
```


- Run `npm i`


## Getting Started

### Installation

Open a Terminal in your project's folder and run

```sh
  yarn add react-native-ios-kit react-native-vector-icons
```

After installation, you'll need to link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

### Usage

Wrap your root component in **ThemeProvider** from **react-native-ios-kit**.

It's a good idea to wrap the component which is passed to **AppRegistry.registerComponent**.

Example:

```javascript
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-ios-kit';
import App from './src/App';

function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);
```

The **ThemeProvider** component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level.

### Customization

#### Main theme for application

You can provide a custom theme to customize the colors, fonts etc. with the **ThemeProvider** component.
Check the [Theme Type](https://callstack.github.io/react-native-ios-kit/docs/theme) to see what customization options are supported.

Example:

```javascript
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'react-native-ios-kit';
import color from 'color';
import App from './src/App';

const theme = {
  ...DefaultTheme,
  primaryColor: 'tomato',
  primaryLightColor: color('tomato')
    .lighten(0.2)
    .rgb()
    .string(),
  disabledColor: 'yellow',
};

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

#### Customization per component

You can also customize theme per one component by using `theme` prop.

Example:

```javascript
  <Icon
    name="ios-people"
    theme={{
      primaryColor: 'green'
    }}
  >
```

This code will change icon color to `green`

