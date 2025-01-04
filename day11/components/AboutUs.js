import { ScrollView, Text, View } from "react-native";
import { Divider, PaperProvider } from "react-native-paper";

export default function AboutUs(){
    return(
        <PaperProvider>
            <ScrollView>
                <View>
                    <Text variant="headlineLarge">History</Text>
                    <Divider/>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles=StyleSheet.create({
    
})