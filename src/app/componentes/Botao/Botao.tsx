import { Pressable, Text } from "react-native";

type BotaoProps = {
    texto: string;
    onPress: () => void;
}

export function Botao({ texto, onPress }: BotaoProps) {
    return (
        <Pressable onPress={onPress}>
            <Text>{texto}</Text>
        </Pressable>
    );
}