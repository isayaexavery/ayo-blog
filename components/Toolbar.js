import { View, Text, Image } from "react-native";
import React from "react";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Toolbar = ({ onPress, num }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        padding: 12,
        height: 70,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StatusBar style="light" backgroundColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={36} color="black" />
        </TouchableOpacity>

        <Text style={{ fontWeight: "500" }}>Ayo Clone</Text>
      </View>

      <View />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          marginRight: 8,
        }}
      >
        <Feather name="search" size={24} color="black" />
        <TouchableOpacity onPress={onPress}>
          {num === 1 && (
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color="black"
            />
          )}

          {num === 2 && (
            <SimpleLineIcons
              style={{ transform: [{ rotate: "90deg" }] }}
              name="control-pause"
              size={22}
              color="black"
            />
          )}

          {num === 3 && <AntDesign name="appstore-o" size={24} color="black" />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Toolbar;
