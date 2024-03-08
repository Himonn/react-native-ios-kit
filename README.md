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

