import { StyleSheet, Text, View, Button } from "react-native";
import { Link } from "expo-router";
import { NativeBaseProvider, Box, VStack, Heading, Center } from "native-base";

export default function Page() {
  return (
    // <NativeBaseProvider>
    //   <Center>
    // <VStack bgColor={"gray.500"} flex={1} >
    //      <Heading style={styles.title} my={24}>Hello World</Heading>
    // </VStack>
    // </Center>
    // </NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        
        <Link href="/profile">Ir para profile</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
