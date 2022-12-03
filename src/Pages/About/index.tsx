import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ImageBackground,
  Linking,
} from "react-native";
import api from "../../Services/api";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";

const About: React.FC = () => {
  const openLink = useCallback((link: string) => {
    try {
      Linking.openURL(link);
    } catch (err) {
      console.log(err, "Error opening link");
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: "#000", height: "100%" }}>
        <ImageBackground
          source={require("../../Assets/backgroundjpeg.jpeg")}
          style={{
            flex: 1,
            alignSelf: "stretch",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              borderWidth: 0.3,
              borderBottomColor: "#ddd",
              height: 70,
              padding: 10,
              marginTop: 50,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="instagram" size={30} color="#fff" />
            <Text style={{ fontSize: 18, color: "#fff" }}>@hevolsoft</Text>
          </View>
          <View
            style={{
              borderWidth: 0.3,
              borderBottomColor: "#ddd",
              height: 70,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="card-bulleted-settings-outline"
              size={30}
              color="#fff"
            />
            <Text style={{ fontSize: 18, color: "#fff" }}>
              www.hevolsoft.com.br
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.3,
              borderBottomColor: "#ddd",
              height: 70,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="consolidate" size={30} color="#fff" />
            <Text style={{ fontSize: 18, color: "#fff" }}>
              Localização da ISS: //open-notify.org/
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default About;
