import { StyleSheet, View } from "react-native";

import Robot from "../components/ui/robot";
import InfoBox from "../components/ui/info-box";
import TextBold from "../components/ui/text-bold";
import PrimaryButton from "../components/ui/primary-button";
import { dancingRobotImg } from "../constants/images";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartGameScreen from "./start-game-screen";

const blurhash =
  "|bGIr|~qt7RPM_RjRjV@Rj^%%2V@WBaxaxWBWBWBSiafV[bHofoekBbHayf+WAR*j[ayj]fkj[j[n$R*WBo1WCWVWBofkCofj[oLkBWCWBWBj]j[f,jZjuWVaxayWVfPjsjFaya|aejsbHf6ayayaekCkBayfkayaeWBWV";

type GameScreenProps = {
  changeScreen: (screen: React.JSX.Element) => void;
};

export default function GameOverScreen(props: GameScreenProps) {
  function tryAgain() {
    props.changeScreen(<StartGameScreen changeScreen={props.changeScreen} />);
  }

  return (
    <View>
      <View className="flex-row justify-center items-center mt-14">
        <Robot text="Yaay!" />
      </View>

      <View className="mt-[54px] mx-[40px]">
        <InfoBox className="gap-2 py-[23px]">
          <TextBold className="text-center">Congratulations to me!</TextBold>

          <View className="bg-white w-[220px] h-[120px] justify-center items-center mx-auto mt-4 rounded-xl">
            <Image
              style={styles.image}
              source={dancingRobotImg}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </InfoBox>

        <PrimaryButton onPress={tryAgain} className="mt-[62] pt-3">
          <AntDesign name="reload1" size={20} color="white" className="" /> Try
          Again
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#0553",
  },
});
