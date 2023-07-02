
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { BottomTabNavigationConfig } from "@react-navigation/bottom-tabs/lib/typescript/src/types"
import { ScreenInputLocation, ScreenShowLocation } from "../screens"
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { colors } from "../styles/colors";
export interface ICoords {
    origemlatitude?: number
    origemlongitude?: number
    destinolatitude?: number
    destinolongitude?: number

}

type TabParam = {
    Input: undefined
    Show: undefined | ICoords
}
type TabScreenNavigation = BottomTabNavigationProp<TabParam, "Input">
export type TabTypes = {
    navigation: TabScreenNavigation
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParam>()
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: colors.secundary,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveBackgroundColor: colors.primary,
            tabBarInactiveTintColor: colors.white,
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: colors.white
        }}>
            <Tab.Screen name="Input" component={ScreenInputLocation}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="search-location" size={24} color={colors.white} />
                    ),
                    headerTitle: "Entrada de dados",
                    tabBarLabel: "Entrada"
                }} />

            <Tab.Screen name="Show" component={ScreenShowLocation}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="location-pin" size={24} color={colors.white} />
                    ),
                    headerTitle: "Posiciona mapa",
                    tabBarLabel: "Mapa"
                }}
            />
        </Tab.Navigator>
    )

}
