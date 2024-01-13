import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import NewsDescriptionScreen from "./screens/NewsDescriptionScreen";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import CustomDrawer from "./components/CustomDrawer";
import BookmarksScreen from "./screens/BookmarksScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#d3d3d3",
        drawerActiveTintColor: "#ec4b7d",
      }}
    >
      <Drawer.Screen
        name="All Items"
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="th-list" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bookmark-check"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AppStack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <AppStack.Navigator initialRouteName="Drawer">
      <AppStack.Screen
        name="Drawer"
        component={DrawerStack}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="News Description"
        component={NewsDescriptionScreen}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default NavigationStack;
