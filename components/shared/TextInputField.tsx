import Colors from "@/data/Colors";
import { View, Text, TextInput, StyleSheet } from "react-native";

type TextInputFieldProps = {
  label: string;
  onChangeText: (text: string) => void;
};

export default function TextInputField({
  label,
  onChangeText,
}: TextInputFieldProps) {
  return (
    <View>
      <Text style={{color: Colors.GRAY}}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={label}
        placeholderTextColor={Colors.GRAY}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 17
  },
});
