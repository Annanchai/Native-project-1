import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";
import { AuthStack } from "./navigation/auth-stack";
import { AuthContext } from "./components/auth-context";
import { WorkoutContext } from "./components/workout-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");
  const [storedWorkoutData, setStoredWorkoutData] = useState("");
  useEffect(() => {
    Font.loadAsync({
      "ubuntu-light": require("./assets/fonts/Ubuntu-Light.ttf"),
      "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
      "ubuntu-medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
      "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    });
    checkWorkoutData();
    console.log(storedWorkoutData);
  }, []);

  const checkCredentials = () => {
    AsyncStorage.getItem("Credentials")
      .then((result) => {
        if (result !== "") {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials("");
        }
      })
      .catch((error) => console.log(error));
  };

  const checkWorkoutData = () => {
    AsyncStorage.getItem("WorkoutData")
      .then((result) => {
        if (result !== "") {
          setStoredWorkoutData(JSON.parse(result));
        } else {
          setStoredWorkoutData("");
        }
      })
      .catch((error) => console.log(error));
  };

  if (appReady) {
    return (
      <AuthContext.Provider value={{ storedCredentials, setStoredCredentials }}>
        <WorkoutContext.Provider
          value={{ storedWorkoutData, setStoredWorkoutData }}
        >
          <AuthStack />
        </WorkoutContext.Provider>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={checkCredentials}
        onFinish={() => setTimeout(() => setAppReady(true), 500)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
