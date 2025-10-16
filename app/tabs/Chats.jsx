import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import cam from "./../../assets/images/cam.png";

const Chats = () => {
  const timeNow = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const chats = [
    {
      id: "1",
      name: "Kaiya Rhiel Madsen",
      message: "I need a link to the project",
      time: timeNow,
      unread: 2,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "2",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "3",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "4",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "5",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "6",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "7",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "8",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "9",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "10",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "11",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
    {
      id: "12",
      name: "John Doe",
      message: "Let’s catch up tomorrow!",
      time: timeNow,
      unread: 0,
      image: require("./../../assets/images/girl.png"),
    },
  ];
  return (
    <>
      <View>
        <View className="px-[20px] min-w-full flex-row  my-[25px] text-center ">
          <Image source={cam} className=""></Image>
          <Text className="text-center w-[89%]">Message</Text>
        </View>
        <ScrollView className="">
          {chats.map((chat) => (
            <>
              <View className="mx-5 flex-row py-2 border-b border-b-gray-300">
                <Image
                  source={chat.image}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10,
                  }}
                />
                
                <View className="flex-1">
                  <Text className="">
                    {chat.name}
                  </Text>
                  <Text className="text-gray">{chat.message}</Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    {chat.time}
                  </Text>
                  {chat.unread > 0 && (
                    <View
                      style={{
                        backgroundColor: "red",
                        borderRadius: 10,
                        paddingHorizontal: 6,
                        paddingVertical: 2,
                        marginTop: 4,
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 12 }}>
                        {chat.unread}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({});
