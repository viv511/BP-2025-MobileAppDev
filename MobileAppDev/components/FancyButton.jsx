import { Pressable, Text, StyleSheet } from "react-native";

export default function FancyButton({ fancyText, buttonResult }) {
  return (
    <Pressable style={styles.buttonContainer} onPress={buttonResult}>
      <Text style={styles.buttonText}>{fancyText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "blue",
    borderRadius: 50,
    margin: 10,
  },
  buttonText: {
    color: "white",
    font: "serif",
    fontSize: 20,
    padding: 20,
  },
});
