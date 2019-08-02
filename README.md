### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native)_

  - `$ yarn`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - [iOS] Via Xcode
      - `open packages/mobile/ios/purpose.xcodeproj` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `studio ./packages/mobile/android/` (open the project on Android Studio)
      - Press the Run button
    - Via CLI
      -  _Open a new terminal tab_
      - `$ cd packages/mobile`
      - `$ npm un -g react-native-cli`
      - `$ npm i -g @react-native-community/cli`
      - _You may need to launch your device emulator before the next command_
      - `$ react-native run-ios` or `react-native run-android`