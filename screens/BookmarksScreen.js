import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Toolbar from "../components/Toolbar";
import { COLORS } from "../constants/constants";
import { newsItems } from "../constants/data";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectBookmark } from "../slices/userSlice";

const newsCategories = [
  {
    label: "ALL",
    isSelected: true,
    id: 0,
  },
  {
    label: "TO STORIES",
    isSelected: false,
    id: 1,
  },
  {
    label: "HABARI ZA MASTAA",
    isSelected: false,
    id: 2,
  },
  {
    label: "MICHEZO",
    isSelected: false,
    id: 3,
  },
];

const BookmarksScreen = () => {
  const navigation = useNavigation();
  const [itemSelected, setItemSelected] = useState(0);
  const [arrangement, setArrangement] = useState(1);

  const bookmarks = useSelector((state) => state.bookmark);

  const existingBookmarks = bookmarks.bookmarks;

  const arrangementHandler = () => {
    if (arrangement > 2) {
      setArrangement(1);
    } else {
      setArrangement(arrangement + 1);
    }
  };

  return (
    <View style={{ paddingBottom: 100 }}>
      <Toolbar num={arrangement} onPress={arrangementHandler} />
      <View>
        <ScrollView
          style={{ marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {newsCategories.map((item, i) => (
            <TouchableOpacity key={item.id} onPress={() => setItemSelected(i)}>
              <View style={{ marginHorizontal: 20 }}>
                <Text
                  style={{ fontWeight: itemSelected === i ? "600" : "400" }}
                >
                  {item.label}
                </Text>
              </View>
              {itemSelected === i && (
                <View
                  style={{
                    height: 1,
                    borderColor: COLORS.red,
                    borderWidth: 1,
                    width: "100%",
                    marginTop: 10,
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* {existingBookmarks ? null : (
        <View
          style={{
            backgroundColor: COLORS.gray,
            paddingBottom: 80,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 100,
          }}
        >
          <Text style={{ paddingHorizontal: 6, fontWeight: "600" }}>
            No Bookmark yet
          </Text>
        </View>
      )} */}
      {arrangement === 1 && (
        <View
          style={{
            backgroundColor: COLORS.gray,
            paddingBottom: 80,
            height: "100%",
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: 10 }}
            data={bookmarks.bookmarks}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item, index, sep }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("News Description", {
                    item: item,
                  })
                }
                key={item.id}
                style={{
                  marginRight: 5,
                  marginBottom: 5,
                  width: "50%",
                  backgroundColor: COLORS.whiteColor,
                  margin: 3,
                  borderRadius: 4,
                }}
              >
                <View style={{}}>
                  <Image
                    style={{
                      width: "100%",
                      height: 100,
                      resizeMode: "cover",
                      borderRadius: 4,
                    }}
                    source={{ uri: item.img }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text style={{ paddingHorizontal: 6, fontWeight: "600" }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        padding: 6,

                        color: COLORS.lightGray,
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {arrangement === 2 && (
        <View style={{ backgroundColor: COLORS.gray, paddingBottom: 100 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: 10 }}
            data={newsItems}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={({ item, index, sep }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("News Description", {
                    item: item,
                  })
                }
                key={item.id}
                style={{
                  flex: 1,
                  marginRight: 5,
                  marginBottom: 5,
                  backgroundColor: COLORS.whiteColor,
                  margin: 3,
                  borderRadius: 4,
                }}
              >
                <View style={{}}>
                  <Image
                    style={{
                      width: "100%",
                      height: 180,
                      resizeMode: "contain",
                      borderRadius: 4,
                    }}
                    source={{ uri: item.img }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text style={{ paddingHorizontal: 6, fontWeight: "600" }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        padding: 6,

                        color: COLORS.lightGray,
                      }}
                    >
                      2 hours ago
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {arrangement === 3 && (
        <View
          style={{
            paddingTop: 4,
            backgroundColor: COLORS.gray,
            paddingBottom: 80,
          }}
        >
          <FlatList
            style={{ marginHorizontal: 10 }}
            data={newsItems}
            keyExtractor={(item) => item.id}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index, sep }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("News Description", {
                    item: item,
                  })
                }
                key={item.id}
                style={{
                  marginRight: 5,
                  marginBottom: 5,

                  backgroundColor: COLORS.whiteColor,
                  margin: 3,
                  borderRadius: 4,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text style={{ paddingHorizontal: 6, fontWeight: "600" }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        padding: 6,

                        color: COLORS.lightGray,
                      }}
                    >
                      2 hours ago
                    </Text>
                  </View>
                  <Image
                    style={{
                      width: 120,
                      height: 100,
                      resizeMode: "cover",
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    }}
                    source={{ uri: item.img }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default BookmarksScreen;
