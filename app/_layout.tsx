import { Button, ScrollView, Text, TextInput, View } from "react-native";

export default function RootLayout() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}>
            <Text>Hello world !</Text>
            <TextInput value="Привет" />
            <Button title="Я кнопка" />
        </ScrollView>
    )
}