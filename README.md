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

- Removed docs and examples from this repo as I currently have no plans to update them
- Merged [#211](https://github.com/callstack/react-native-ios-kit/pull/211) (from original repo) to migrate to TypeScript
- Merged [#2](https://github.com/Himonn/react-native-ios-kit/pull/2) to add `onLongPress` to `RowItem`
- Merged [#3](https://github.com/Himonn/react-native-ios-kit/pull/3) to remove `Slider` in favour of `@react-native-community/slider` and add `SliderRow`
- Merged [#5](https://github.com/Himonn/react-native-ios-kit/pull/5) to add `EmptyRow`
- Merged [#7](https://github.com/Himonn/react-native-ios-kit/pull/7) to add `onHeaderPress` to `TableView`
- Merged [#8](https://github.com/Himonn/react-native-ios-kit/pull/8) to add `disabledColoor` prop to `Button`
- Add forceFullWidthBottomSeparator and forceFullWidthTopSeparator to RowItem
- Add box prop to TextFieldRow
- Add clear button to textfieldrow
- Add hideClearButton on empty row
- Add removeBottomSeparator to RowItem and withoutTopBottomSeparators to TableView
- Add removeBottomSeparator to EmptyRow
- Add iconColour and chevronColour to NavigationRow and RowItem
- Add iconColour and autoHideClearIcon to textFieldRow
- Adjust behaviour of fullWidthTopSeparator
- Disable commitlint
- Fix non-editable TextInput logic
- Fix broken NavigationRow icons
- Fix visibility of disabled icon on TextFieldRow
- Fix removeBottomSeparator and add removeTopSeparator to EmptyRow

## Fork Usage

- Update your `package.json` to point to this repository for `react-native-ios-kit`


```json
  "dependencies": {
    "react-native-ios-kit": "https://github.com/Himonn/react-native-ios-kit/tarball/<INSERT MOST RECENT COMMIT HASH>",
  }
```

- Run `npm i`


### Usage

Please see callstack's original documention [Here](https://github.com/callstack/react-native-ios-kit/)

