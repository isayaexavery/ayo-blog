import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/constants";

const RelatedPostCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("News Description", {
          id: item.id,
        })
      }
      style={{
        marginBottom: 5,

        backgroundColor: COLORS.whiteColor,
        margin: 3,
        borderRadius: 4,
      }}
    >
      <View style={{ position: "relative" }}>
        <Image
          style={{
            width: 200,
            height: 150,
            borderRadius: 4,
          }}
          source={{ uri: data.img }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 2,
          }}
        >
          <Text
            style={{
              paddingHorizontal: 6,
              fontWeight: "600",
              color: COLORS.whiteColor,
              width: "100",
            }}
          >
            {data.title}
          </Text>
          <Text
            style={{
              padding: 6,

              color: COLORS.lightGray,
            }}
          >
            {data.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RelatedPostCard;
