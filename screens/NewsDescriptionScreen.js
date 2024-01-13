import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useEffect } from "react";
import {
  Ionicons,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants/constants";
import { newsItems } from "../constants/data";
import RelatedPostCard from "../components/RelatedPostCard";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkActions } from "../slices/userSlice";

const NewsDescriptionScreen = ({ data }) => {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmark);
  const existingBookmark = bookmarks?.bookmarks?.find(
    (itm) => itm.id === item.item.id
  );

  const addToBookmarkHandler = () => {
    if (!existingBookmark) {
      dispatch(bookmarkActions.addBookmark(item.item));
      ToastAndroid.show("Bookmarked!", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Already Bookmarked!", ToastAndroid.SHORT);
    }
  };

  return (
    <View>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <Text style={{ fontWeight: "500", fontSize: 16 }}>All items</Text>
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
          <Entypo name="share" size={22} color="black" />
          <TouchableOpacity onPress={addToBookmarkHandler}>
            <Ionicons
              name={existingBookmark ? "bookmark" : "bookmark-outline"}
              size={22}
              color="black"
            />
          </TouchableOpacity>

          <Entypo name="dots-three-vertical" size={22} color="black" />
        </View>
      </View>
      <ScrollView
        style={{ height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontWeight: "500", fontSize: 20 }}>
            {item.item.title}
          </Text>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 14,
              color: COLORS.darkGray,
              gap: 10,
            }}
          >
            <Text>{item.item.source} </Text>
            <Text
              style={{
                color: COLORS.lightGray,
                fontWeight: "500",
                marginHorizontal: 10,
              }}
            >
              {item.item.time}
            </Text>
          </Text>
          <Image
            style={{
              marginTop: 20,
              width: "100%",
              height: 220,
              resizeMode: "cover",
              borderRadius: 4,
            }}
            source={{ uri: item.item.img }}
          />
          <Text
            style={{
              fontSize: 16,
              letterSpacing: 1,
              lineHeight: 25,
              marginTop: 20,
            }}
          >
            {item.item.description}
          </Text>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: COLORS.gray,
            marginVertical: 20,
          }}
        />

        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontWeight: "600" }}>SHARE ON</Text>
          <View style={{ marginTop: 16, flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#316FF6",
                paddingVertical: 8,
                borderRadius: 3,
                marginHorizontal: 3,
              }}
            >
              <FontAwesome
                name="facebook-f"
                size={24}
                color={COLORS.whiteColor}
                style={{ marginLeft: 10 }}
              />
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 16,
                  color: COLORS.whiteColor,
                  fontWeight: "500",
                }}
              >
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#1DA1F2",
                paddingVertical: 8,
                borderRadius: 3,
                marginHorizontal: 3,
              }}
            >
              <FontAwesome
                name="twitter"
                size={24}
                color={COLORS.whiteColor}
                style={{ marginLeft: 10 }}
              />
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 16,
                  color: COLORS.whiteColor,
                  fontWeight: "500",
                }}
              >
                Twitter
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 16, flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#25d366",
                paddingVertical: 8,
                borderRadius: 3,
                marginHorizontal: 3,
              }}
            >
              <FontAwesome
                name="whatsapp"
                size={24}
                color={COLORS.whiteColor}
                style={{ marginLeft: 10 }}
              />
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 16,
                  color: COLORS.whiteColor,
                  fontWeight: "500",
                }}
              >
                WhatsApp
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#1DA1F2",
                paddingVertical: 8,
                borderRadius: 3,
                marginHorizontal: 3,
              }}
            >
              <MaterialCommunityIcons
                style={{ marginLeft: 10 }}
                name="android-messages"
                size={24}
                color={COLORS.whiteColor}
              />
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 16,
                  color: COLORS.whiteColor,
                  fontWeight: "500",
                }}
              >
                S M S
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.lightGray,
            marginTop: 20,
          }}
        />
        <View style={{ padding: 20, backgroundColor: COLORS.gray }}>
          <Text style={{ fontWeight: "600" }}>RELATED POST</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ marginBottom: 80 }}
          >
            {newsItems.slice(0, 3).map((itm) => (
              <RelatedPostCard key={itm.id} data={itm} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsDescriptionScreen;
