import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "@/data/Colors";
import Button from "@/components/shared/Button";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("../assets/images/login.png")}
        style={{ width: "100%", height: 450 }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
          Welcome to College Campus Francis
        </Text>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            marginTop: 10,
            color: Colors.GRAY,
          }}
        >
          Your college news, updated in your pocket, Join the club, Registered
          for new events and more!
        </Text>
        <Button
          text="Get Started"
          onPress={() => router.push("/(auth)/SignUp")}
        />
        <Pressable onPress={() => router.push("/(auth)/SignIn")}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: Colors.GRAY,
              marginTop: 7,
            }}
          >
            Already have an account? Sign In Here
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
