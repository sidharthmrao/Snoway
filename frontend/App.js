import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LogBox} from 'react-native';

import HelloScreen from "./Screens/HelloScreen/HelloScreen.js";
import LoginPage from "./Screens/LoginPage/LoginPage.js";
import SignupPage from "./Screens/SignupPage/SignupPage.js";
import HomePage from "./Screens/HomePage/HomePage.js";
import Settings from "./Screens/Settings/Settings.js";
import Profile from "./Screens/Profile/Profile.js";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  "No native splash screen registered for given view controller. Call 'SplashScreen.show' for given view controller first.",
])

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="main" component={HelloScreen} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="signup" component={SignupPage} />
        <Stack.Screen name="homepage" component={HomePage} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}