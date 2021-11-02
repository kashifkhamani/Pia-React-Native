import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Surface, IconButton, Colors } from "react-native-paper";
import iconFont from "react-native-vector-icons/FontAwesome5";

// Styles
// import Styles from "../assets/styles/style";

const Card = () => {
  return (
    <View>
      {/* <ScrollView>
      </ScrollView> */}
      <Surface style={Styles.surface}>
        <Text>WhatsApp Card</Text>
        <IconButton icon="camera" color={Colors.red500} size={20} />
      </Surface>
    </View>
  );
};

export default Card;

const Styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1.5,
    borderRadius: 7,
  },
});
