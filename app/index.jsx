import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./../global.css";
import Chats from "./tabs/Chats";
const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView  >
      <View>
        <Chats />
        {/* <MessageArea/> */}
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default index;

const styles = StyleSheet.create({});
