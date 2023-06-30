import {Text, View} from 'react-native';
import React, {useState} from 'react';
import { ComponentButton, ComponentInput, ComponentTitle } from '../../components';
import {styles} from "./styles"
import { ICoords } from '../../navigations/tab.navigation';

export function InputLocation(item: ICoords) {
const [data, setdata] = useState<ICoords>()
function handleChange(){
    setdata({...data, ...item})
}
    return(

        <View style={styles.container}>
            <ComponentTitle>Origem</ComponentTitle>
            <ComponentInput 
            placeholder='latitude'
            keyboardType='decimal-pad'
            onChangeText={(i) => handleChange({origem: {latitude: Number(i) } })}
            
            />
            <ComponentInput placeholder='longitude'/>
            <ComponentTitle>Destino</ComponentTitle>
            <ComponentInput placeholder='latitude'/>
            <ComponentInput placeholder='longitude'/>
            <ComponentButton>
            <ComponentTitle style={styles.buttonText}>Enviar</ComponentTitle>
            </ComponentButton>
        </View>
        
        
    )
}