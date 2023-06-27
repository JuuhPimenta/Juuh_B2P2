import {Text, View} from 'react-native';
import { ComponentButton, ComponentInput } from '../../components';
import {styles} from "./styles"

export function InputLocation() {
    return(

        <View style={styles.container}>
            <Text>Origem</Text>
            <ComponentInput placeholder='latitude'/>
            <ComponentInput placeholder='longitude'/>
            <Text>Destino</Text>
            <ComponentInput placeholder='latitude'/>
            <ComponentInput placeholder='longitude'/>
            <ComponentButton>
                <Text>Enviar</Text>
            </ComponentButton>
        </View>
        
        
    )
}