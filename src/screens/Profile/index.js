import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import { AuthContext } from "../../context";

const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button
        title="Sign Out"
        onPress={() => signOut()}
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

export default Profile;
