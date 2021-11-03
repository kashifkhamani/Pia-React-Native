import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../Components/Card";

const MainScreen = () => {
  const cardProperties = [
    {
      id: 1,
      iconName: "phone",
      color: "green",
      subtitle: "PIA phone directory",
    },
    {
      id: 2,
      iconName: "file",
      color: "purple",
      subtitle: "Complain Management",
    },
    {
      id: 3,
      iconName: "file",
      color: "orange",
      subtitle: "My Attendance",
    },
    {
      id: 4,
      iconName: "file",
      color: "green",
      subtitle: "MyID Travel Request",
    },
    {
      id: 5,
      iconName: "timer",
      color: "orange",
      subtitle: "My Tasks",
    },
    {
      id: 6,
      iconName: "hand",
      color: "blue",
      subtitle: "My Provident Funds",
    },
    {
      id: 7,
      iconName: "hand",
      color: "blue",
      subtitle: "My Provident Funds",
    },
    {
      id: 8,
      iconName: "hand",
      color: "blue",
      subtitle: "My Provident Funds",
    },
    {
      id: 9,
      iconName: "hand",
      color: "blue",
      subtitle: "My Provident Funds",
    },
  ];
  // const subtitle = [];

  return (
    <ScrollView>
      <View
        style={{
          justifyContent: "center",
          marginTop: 120,
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {cardProperties.map((icon, index) => {
          const { iconName, color, subtitle } = icon;
          return (
            <View>
              <Card
                key={index}
                icon={iconName}
                color={color}
                subtitle={subtitle}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MainScreen;
