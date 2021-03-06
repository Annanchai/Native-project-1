import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { sc, themeColors, globalFonts } from "../styles/global-styles";
import { ButtonType1 } from "../components/buttons";
import data from "../assets/data/data.json";
import { SubHeader } from "../components/subheader";
import { StatusBar } from "expo-status-bar";

const duration = data.programs.pId1.duration.slice(0, 1);

export default ProgramDetails = ({ navigation }) => {
  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.programDetailsContainer}>
      <StatusBar translucent={true} />
      <View style={styles.backgroudImageContainer}>
        <ImageBackground
          source={require("../assets/images/muscle-gain.jpg")}
          style={styles.image}
        >
          <View style={styles.overlay}>
            <SubHeader
              text={data.programs.pId1.programName.split("Aboo Thahir")}
              onPress={backHandler}
            />
            <View style={styles.contentContainer}>
              <Text style={styles.smallHeading}>
                {data.programs.pId1.level}, {duration} Week Program
              </Text>
              <ButtonType1
                text={"Join Now"}
                arrow={false}
                styling={styles.button}
                textStyling={styles.buttonText}
                onClick={() => navigation.navigate("BuyNow")}
              />
              <Text style={styles.smallHeading}>
                Category: {data.programs.pId1.goal}
              </Text>
              <Text style={styles.smallHeading}>
                Days Per Week: {data.programs.pId1.days}
              </Text>
              <Text style={styles.smallHeading}>
                Equipment: {data.programs.pId1.equipment}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.content}>{data.programs.pId1.description}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  programDetailsContainer: {
    width: "100%",
    height: "100%",
    marginTop: 40 * sc,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  backgroudImageContainer: {
    flex: 1,
  },

  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  contentContainer: {
    alignItems: "center",
    paddingVertical: 10 * sc,
  },

  smallHeading: {
    color: themeColors.secondary2,
    fontSize: 14 * sc,
    fontFamily: globalFonts.primaryMedium,
    marginVertical: 13 * sc,
  },

  button: {
    minWidth: 200 * sc,
  },

  buttonText: {
    fontSize: 20 * sc,
  },

  descriptionContainer: {
    flex: 1,
    padding: 15 * sc,
  },

  content: {
    color: themeColors.tertiary1,
    fontFamily: globalFonts.primaryRegular,
    fontSize: 16 * sc,
    textAlign: "justify",
    lineHeight: 30 * sc,
  },
});
