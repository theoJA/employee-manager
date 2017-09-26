# Employee Manager

### About 

A basic employee management app. Allows the user to sign up, log in and create multiple employees. Created employees will be displayed and when clicked will be given the option to edit, text or delete employee. Supports multiple users and will only display the employees each user created. 

All backend processes were performed through Firebase.

To sign up, simply enter an email and password and you will be registered and signed in automatically. If there is an authentication error it might be caused by one of the following:

- The email entered already exists in the system
- The email entered is not of valid format (has to be in the format of email@something.com)
- Password does not match an existing email (when signing up with a new email, the password must contain at least 1 letter)

The register/sign in feature is really unintuitive and has bad feedback. It will definitely be the first thing I improve in the future.

With the appropriate UI changes, the codebase for this app can be used to create other similar functioning apps; To-Do List, Personal Notes, etc. 

---
### Screenshots

- [Login screen](https://user-images.githubusercontent.com/26525967/30839765-d49e68b6-a241-11e7-8e9b-21fa46f69b76.png)
- [List of employees](https://user-images.githubusercontent.com/26525967/30839771-d4b1f5d4-a241-11e7-8c1b-a0b1ff13e8f0.png)
- [Viewing or editing an employee](https://user-images.githubusercontent.com/26525967/30839766-d4acdb6c-a241-11e7-8ba6-9f833fc47434.png)
- [Deleting an employee](https://user-images.githubusercontent.com/26525967/30839767-d4ae003c-a241-11e7-92dc-d5b0a785cfa9.png)
- [Creating an employee](https://user-images.githubusercontent.com/26525967/30839768-d4ae0f50-a241-11e7-88c8-6d210478024c.png)

---
### Future Plans

- Deploy app using Expo
- Polish the UI and UX (especially for register/sign in)
- Add OAuth to login screen

---

### How to run:

If first time running an Android/iOS app, follow the steps here: https://facebook.github.io/react-native/docs/getting-started.html Make sure to select the tab "Building Projects with Native Code"

After that: 
- Run an Android or iOS emulator. Or even better, connect an Android or iOS device 
  (https://facebook.github.io/react-native/docs/running-on-device.html).
- Clone repository and cd to project directory
- Run the command "react-native run-android" or "react-native run-ios" according to the emulator/device used
