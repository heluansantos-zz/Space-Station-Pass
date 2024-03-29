import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import Geolocation from "@react-native-community/geolocation";
import api from "../../Services/api";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Pass: React.FC = () => {
  const [pass, setPass] = useState<
    {
      duration: number;
      risetime: number;
    }[]
  >([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [region, setRegion] = useState([]);

  useEffect(() => {
    getGeoLocation();
    getPass();
  });

  const getGeoLocation = useCallback(() => {
    try {
      Geolocation.getCurrentPosition(
        (info: {
          coords: {
            latitude: any;
            longitude: any;
          };
        }) => {
          setLatitude(info.coords.latitude);
          setLongitude(info.coords.longitude);
        }
      );
    } catch (err) {
      console.log(err, "Error getting location");
    }
  }, []);

  const getPass = useCallback(async () => {
    if (!latitude || !longitude) return;
    try {
      const passX = await api.get(
        `/iss-pass.json?lat=${latitude}&lon=${longitude}`
      );
      setPass(passX.data.response);
    } catch (err) {
      console.log(err, "Error getting pass");
    }
  }, [latitude, longitude]);

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
          <FlatList
            data={pass}
            style={{ marginTop: 40 }}
            renderItem={(item) => (
              <View
                style={{
                  borderWidth: 0.3,
                  borderBottomColor: "#ddd",
                  height: 100,
                  marginBottom: 3,
                  padding: 10,
                  marginTop: 3,
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  name="satellite-variant"
                  size={50}
                  color="#fff"
                  style={{ marginTop: 9 }}
                />
                <View style={{ flexDirection: "column", padding: 6 }}>
                  <Text style={{ fontSize: 18, color: "#fff" }}>
                    Data/Hora:{" "}
                    {new Date(item.item.risetime * 1000)
                      .toISOString()
                      .slice(0, 19)
                      .replace("T", " ")}
                  </Text>
                  <Text style={{ fontSize: 18, color: "#fff" }}>
                    Duracão: {item.item.duration} Segundos
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Pass;
