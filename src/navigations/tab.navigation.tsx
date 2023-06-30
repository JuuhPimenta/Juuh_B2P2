
import {createBottomTabNavigator, BottomTabNavigationProp} from "@react-navigation/bottom-tabs"
import { BottomTabNavigationConfig } from "@react-navigation/bottom-tabs/lib/typescript/src/types"
import { ScreenInputLocation } from "../screens"
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from "../styles/colors";
export interface ICoords{
    origem?: {
        latitude?: number
        longitude?: number
    },
    destino?: {
        latitude?: number
        longitudew: number
    }
}

type TabParam = {
    Input: undefined
    Show: undefined
}
type TabScreenNavigation = BottomTabNavigationProp<TabParam, "Input">
export type TabTypes = {
    nevigation: TabScreenNavigation
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: colors.primary,
            tabBarActiveTintColor: colors.white,
            headerStyle: {
                backgroundColor:colors.primary
            },
            headerTintColor: colors.white
        }}>
            <Tab.Screen name="Input" component={ScreenInputLocation}
                options={{
                    tabBarIcon:() => (
                        <FontAwesome5 name="search-location" size={24} color={colors.white} />
                    ),
                    headerTitle: "Entrada de dados",
                    tabBarLabel: "Entrada"
                }}
            />
        </Tab.Navigator>
   )

}
