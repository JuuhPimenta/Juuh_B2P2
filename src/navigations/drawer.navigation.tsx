import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer"
import {ScreenInputLocation, ScreenShowLocation} from '../screens'
import { ICoords } from "./tab.navigation"
import {colors} from "../styles/colors"
import { FontAwesome5, Entypo } from "@expo/vector-icons"

type DrawerParam = {
Input: undefined
Show: undefined  | ICoords
}
type DrawerScreenNavigation = DrawerNavigationProp<DrawerParam, "Input">
export type DrawerTypes = {
nevigation: DrawerScreenNavigation
}

export function DrawerNavigation(){
    const Drawer = createDrawerNavigator<DrawerParam>()
    return(
        <Drawer.Navigator screenOptions={{
            drawerActiveBackgroundColor: colors.secundary,
            drawerActiveTintColor: colors.white,
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: colors.white,
            drawerInactiveBackgroundColor:colors.primary,
            drawerInactiveTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.primary
            }
        }}>
            <Drawer.Screen name="Input" component={ScreenInputLocation}
                options={{
                    drawerLabel: 'Entrada',
                    headerTitle: 'Entrada de Dados',
                    drawerIcon: () => (
                        <FontAwesome5 name="search-location" size={24} color={colors.white} />
                    )

                }}
                
            
            />
            <Drawer.Screen name="Show" component={ScreenShowLocation}
                options={{
                    drawerLabel: 'Mapa',
                    headerTitle: 'Posiciona Mapa',
                    drawerIcon: () => (
                        <Entypo name="location-pin" size={24} color={colors.white} />
                    )

                }}
            
            
            />
        </Drawer.Navigator>
    )
}