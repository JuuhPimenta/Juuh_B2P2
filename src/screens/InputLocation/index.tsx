import { Text, View, Alert } from 'react-native';
import React, { useState } from "react";
import { ComponentButton, ComponentInput, ComponentTitle } from '../../components';
import { styles } from "./styles"
import { ICoords, TabTypes } from '../../navigations/tab.navigation';


export function InputLocation({navigation}:TabTypes) {
    const [data, setdata] = useState<ICoords>()
    function handleChange(item: ICoords) {
        setdata({ ...data, ...item })
    }
    function handleShowMap() {
        console.log(data)
        if(!data?.destinolatitude || !data.destinolongitude || 
            !data.origemlatitude || !data.origemlongitude
        ){
            Alert.alert ("Preencha todo o formulário")
        } else{
            navigation.navigate("Show", data)
        } 
    }

    return (

        <View style={styles.container}>
            <ComponentTitle>Origem</ComponentTitle>
            <ComponentInput
                placeholder='latitude'
                onChangeText={(i) => handleChange({ origemlatitude: Number(i) } )}

            />
            <ComponentInput 
                placeholder='longitude'
                onChangeText={(i) => handleChange({ origemlongitude: Number(i) } )}
            />
            <ComponentTitle>Destino</ComponentTitle>
            <ComponentInput 
                placeholder='latitude'
                onChangeText={(i) => handleChange({ destinolatitude: Number(i) } )}
            />
            <ComponentInput 
                placeholder='longitude'
                onChangeText={(i) => handleChange({ destinolongitude: Number(i) } )}
            />
            <ComponentButton onPress={handleShowMap}>
                <ComponentTitle style={styles.buttonText}>Enviar</ComponentTitle>
            </ComponentButton>
        </View>


    )
}