import {Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState, useEffect } from "react"
import MapView,{Polyline, Marker, Region} from "react-native-maps"
import { ComponentButton, ComponentInput, ComponentTitle } from '../../components';
import {styles} from "./styles"
import { useRoute } from "@react-navigation/native"
import { ICoords } from '../../navigations/tab.navigation';
import { colors } from "../../styles/colors"

export function ShowLocation() {
    const route = useRoute()
    const data = route.params as ICoords
    const [error, setError] = useState<string | null>(null)
    const [origem, setOrigem] = useState<Region | null>(null)
    const [destino, setDestino] = useState<Region | null>(null)
  
        useEffect(() => {
            if (data && data.origemlatitude && data.origemlongitude) {
                setOrigem({latitude: data.origemlatitude, 
                           longitude: data.origemlongitude,
                           latitudeDelta: 0.004,
                           longitudeDelta: 0.004,
                          
                        })
            } else {
                setError("Sem origem")
            }
            if(data && data.destinolatitude && data.destinolongitude ) {
                setDestino({latitude: data.destinolatitude, 
                           longitude: data.destinolongitude,
                           latitudeDelta: 0.004,
                           longitudeDelta: 0.004,
                          
                        })
            } else {
                setError("Sem destino")
            }
        }, [data]
        
        )

    return(
        <View style={styles.container}>

        {origem && destino ?

        <MapView
        
            showsUserLocation={true}
            style={styles.map}
            initialRegion={origem}
        >
            
             <Marker  coordinate={origem}>
                 <MaterialIcons name="location-history" size={50} color="black" />
             </Marker>
             <Marker  coordinate={destino}> 
                   <MaterialIcons name="location-history" size={50} color="black" />
             </Marker>
             <Polyline 
             coordinates={[
                {latitude: origem.latitude, longitude: origem.longitude},
                {latitude: destino.latitude, longitude: destino.longitude}
             ]}
             strokeColor={colors.black}
             strokeWidth={7}
             />
            

        </MapView>

        : <Text style={styles.text}>{error}</Text>

     } 
        </View>
        
    )
}