import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { estilosGlobais } from '../style/global';
import { estilosCartaoPerfil } from './CartaoPerfil.style';

type CartaoPerfilProps = {
    nome: string;
    curso: string;
    avatarUrl: string;
}

export function CartaoPerfil({ nome, curso, avatarUrl }: CartaoPerfilProps) {
    return (
        <View>
            <Image
                source={avatarUrl}
                style={[
                    estilosGlobais.cartao,
                    estilosCartaoPerfil.avatar,
                ]}
            />
        <Text style={estilosGlobais.titulo}>{nome}</Text>
        <Text style={estilosGlobais.textoSecundario}>{curso}</Text>
        </View>
    );
}