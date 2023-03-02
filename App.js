import { View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
    return(
        <View>
                <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
        </View>
    )
}
