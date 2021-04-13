import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Details = ({ route }) => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Details;
