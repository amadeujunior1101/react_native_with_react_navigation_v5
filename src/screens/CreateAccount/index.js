import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import { AuthContext } from "../../context";

const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} style={styles.button} />
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

export default CreateAccount;
