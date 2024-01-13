import { View, Text, Image, ToastAndroid, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "red" }}
      >
        <View>
          <Image
            source={require("../assets/ayo-img.jpeg")}
            style={{ height: 230, width: "auto" }}
          />
          <Text
            style={{
              bottom: 8,
              color: "white",
              fontWeight: "700",
              marginLeft: 20,
              position: "absolute",
            }}
          >
            Ayo Clone
          </Text>
        </View>

        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
          {/* <MaterialIcons name="ondemand-video" size={24} color="black" /> */}
          <DrawerItem
            label="Online Radio"
            icon={() => <MaterialIcons name="radio" size={24} color="gray" />}
            onPress={() =>
              ToastAndroid.show("Not Implemented!", ToastAndroid.SHORT)
            }
          />

          <DrawerItem
            label="Videos"
            icon={() => (
              <MaterialIcons name="ondemand-video" size={24} color="gray" />
            )}
            onPress={() =>
              ToastAndroid.show("Not Implemented!", ToastAndroid.SHORT)
            }
          />

          <DrawerItem
            label="Web"
            icon={() => (
              <MaterialCommunityIcons name="web" size={24} color="gray" />
            )}
            onPress={() => Linking.openURL("https://millardayo.com")}
          />
          <View
            style={{
              backgroundColor: "#D3D3D3",
              marginVertical: 10,
              height: 1,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontWeight: "600",
              marginTop: 10,
              marginHorizontal: 20,
            }}
          >
            Social Media
          </Text>
          <DrawerItem
            label="Facebook"
            icon={() => (
              <Ionicons name="logo-facebook" size={24} color="gray" />
            )}
            onPress={() => Linking.openURL("https://facebook.com/millardayo")}
          />
          <DrawerItem
            label="Instagram"
            icon={() => (
              <Ionicons name="logo-instagram" size={24} color="gray" />
            )}
            onPress={() => Linking.openURL("https://instagram.com/millardayo")}
          />
          <DrawerItem
            icon={() => <Ionicons name="logo-twitter" size={24} color="gray" />}
            label="Twitter"
            onPress={() => Linking.openURL("https://twitter.com/millardayo")}
          />
          <DrawerItem
            label="YouTube"
            icon={() => <Ionicons name="logo-youtube" size={24} color="gray" />}
            onPress={() => Linking.openURL("https://youtube.com/millardayo")}
          />

          <View
            style={{
              backgroundColor: "#D3D3D3",
              marginVertical: 10,
              height: 1,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontWeight: "600",
              marginTop: 10,
              marginHorizontal: 20,
            }}
          >
            Contact
          </Text>
          <DrawerItem
            label="Email"
            icon={() => (
              <MaterialCommunityIcons name="email" size={24} color="gray" />
            )}
            onPress={() => Linking.openURL("https://facebook.com/millardayo")}
          />

          <View
            style={{
              backgroundColor: "#D3D3D3",
              marginVertical: 10,
              height: 1,
            }}
          />

          <DrawerItem
            label="Theme"
            icon={() => (
              <Ionicons name="color-palette" size={24} color="gray" />
            )}
            onPress={() => Linking.openURL("https://facebook.com/millardayo")}
          />
          <DrawerItem
            label="Rate this app"
            icon={() => (
              <MaterialIcons name="star-rate" size={24} color="gray" />
            )}
            onPress={() => Linking.openURL("https://facebook.com/millardayo")}
          />
          <DrawerItem
            label="Share this app"
            icon={() => <Entypo name="share" size={24} color="gray" />}
            onPress={() => Linking.openURL("https://facebook.com/millardayo")}
          />
          <DrawerItem
            label="Settings"
            icon={() => <FontAwesome name="gear" size={24} color="gray" />}
            onPress={() => Linking.openURL("https://facebook.com/millardayo")}
          />
          <DrawerItem
            label="About"
            icon={() => <Feather name="info" size={24} color="gray" />}
            onPress={() => Linking.openURL("https://facebook.com/millardayo")}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
