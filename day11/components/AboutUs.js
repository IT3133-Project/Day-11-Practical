import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider, PaperProvider } from "react-native-paper";

export default function AboutUs(){
    return(
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View>
                    <Text variant="headlineLarge">History</Text>
                    <Divider/>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    imagepad: {
        padding: 8,
        alignItems: 'center',
        flex: 2,
        marginBottom: 10
    },
    image: {
        width: '80%',
        height: 70,
    },
    body: {
        padding: 8,
        textAlign: 'justify',
        flex: 6,
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        marginTop: 10
    }
})