import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Surface, IconButton } from "react-native-paper";

// Styles
// import Styles from "../assets/styles/style";

const Card = (props) => {
  const { icon, color, subtitle } = props;
  return (
    <View>
      <Surface style={Styles.surface}>
        <IconButton icon={icon} color={color} size={55} />
        <Text>{subtitle}</Text>
      </Surface>
    </View>
  );
};

export default Card;

const Styles = StyleSheet.create({
  surface: {
    height: 120,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1.5,
    borderRadius: 7,
    margin: 7,
  },
});
