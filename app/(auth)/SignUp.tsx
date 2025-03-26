import { View, Text, Image} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/data/Colors";
import TextInputField from "@/components/shared/TextInputField";

export default function SignUp() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 7 }}>
          Create New Account
        </Text>
      </SafeAreaView>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={require("../../assets/images/profile.png")}
            style={{ width: 100, height: 100, borderRadius: 99 }}
          />
          <Ionicons
            name="camera"
            size={24}
            color={Colors.PRIMARY}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </View>
      </View>
      <View>
        <TextInputField   
          label="Full Name"
          onChangeText={(v) => console.log()}
        />
      </View>
    </SafeAreaProvider>
  );
}

