import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Nevigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import MainScreen from "./Screens/MainScreen";
import TelephoneDirectory from "./Pages/TelephoneDirectory/index";
import { Avatar } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Screen">
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen
          name="Telephone Directory"
          component={TelephoneDirectory}
          options={{
            headerLeft: () => (
              <Avatar.Image size={50} source={require("./assets/avatar.png")} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
