import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import { AuthContext } from "../../context";

const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default SignIn;
