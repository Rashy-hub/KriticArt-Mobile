import { Pressable, Text } from "react-native"

export default Bouton = ({ title, onPress }) => {
    return <Pressable onPress={onPress} style={({ pressed }) => [
        {
            backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
        }]}><Text>{title}</Text></Pressable>
}
