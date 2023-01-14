import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HelloScreen from "./Screens/HelloScreen/HelloScreen.js";
import LoginPage from "./Screens/LoginPage/LoginPage.js";
import SignupPage from "./Screens/SignupPage/SignupPage.js";
import HomePage from "./Screens/HomePage/HomePage.js";

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}