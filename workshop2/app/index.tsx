import { Text, View, Pressable } from "react-native";
import FancyButton from "@/components/FancyButton";
import { useState } from "react";

export default function Index() {
  const [counter, setCounter] = useState(0);

  const cookieButton = () => {
    setCounter(counter + 1);
  };

  const pressButton = () => {
    setCounter(0);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "blue",
        borderWidth: 10,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 60, marginBottom: 20 }}>cookie.</Text>

      <FancyButton
        fancyText={"🍪 cookie clicker?"}
        buttonResult={cookieButton}
      />

      <Text style={{ fontSize: 40, marginBottom: 10 }}>{counter}</Text>

      <FancyButton fancyText={"reset?"} buttonResult={pressButton} />
      <FancyButton
        fancyText={"cheat code?"}
        buttonResult={() => setCounter(counter ** 2)}
      />
    </View>
  );
}
